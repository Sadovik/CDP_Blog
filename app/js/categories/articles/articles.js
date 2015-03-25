angular.module('categories.articles',[
    'categories.articles.create',
    'categories.articles.edit',
    'blog.models.categories',
    'blog.models.articles'
])
    .config(function($stateProvider){
        $stateProvider
            .state('blog.categories.articles', {
                url: 'categories/:category',
                views: {
                    'articles@': {
                        templateUrl: 'app/js/categories/articles/articles.tmpl.html',
                        controller: 'ArticlesListCtrl as articlesListCtrl'
                    }
                }
            })
    })
    .controller('ArticlesListCtrl', function ($stateParams, CategoriesModel, ArticlesModel ){

        var articlesListCtrl = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        ArticlesModel.getArticles()
            .then(function(articles){
                articlesListCtrl.articles = articles;
            });

        articlesListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        articlesListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
        articlesListCtrl.deleteArticle = ArticlesModel.deleteArticle;
    })
;