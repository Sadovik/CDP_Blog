angular.module('categories.articles.edit',[

])
    .config(function($stateProvider){
        $stateProvider
            .state('blog.categories.articles.edit', {
                url: '/articles/:articleId/edit',
                templateUrl: 'app/js/categories/articles/edit/article-edit.tmpl.html',
                controller: 'EditArticleCtrl as editArticleCtrl'
            })
        ;
    })
    .controller('EditArticleCtrl', function($state, $stateParams, ArticlesModel){
        var editArticleCtrl = this;

        function returnToArticles() {
            $state.go('blog.categories.articles', {
                category: $stateParams.category
            })
        }

        function cancelEditing() {
            returnToArticles();
        }

        function updateArticle() {
            editArticleCtrl.article = angular.copy(editArticleCtrl.editedArticle);
            ArticlesModel.updateArticle(editArticleCtrl.article);
            returnToArticles();
        }

        ArticlesModel.getArticleById($stateParams.articleId)
            .then(function(article){
                if (article) {
                    editArticleCtrl.article = article;
                    editArticleCtrl.editedArticle = angular.copy(editArticleCtrl.article);
                } else {
                    returnToArticles();
                }
            });

        editArticleCtrl.cancelEditing = cancelEditing;
        editArticleCtrl.updateArticle = updateArticle;
    })
;