angular.module('categories',[
    'blog.models.categories'
])
    .config(function($stateProvider){
        $stateProvider
            .state('blog.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/js/categories/categories.tmpl.html'
                    },
                    'articles@': {
                        controller: 'ArticlesListCtrl as articlesListCtrl',
                        templateUrl: 'app/js/categories/articles/articles.tmpl.html'
                    }
                }
            })
    })
    .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel){
        var categoriesListCtrl = this;

        CategoriesModel.getCategories()
            .then(function(result){
                categoriesListCtrl.categories = result;
            });
    })
;