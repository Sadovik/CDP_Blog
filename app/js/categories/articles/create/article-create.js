angular.module('categories.articles.create',[

])
    .config(function($stateProvider){
        $stateProvider
            .state('blog.categories.articles.create', {
                url: '/articles/create',
                templateUrl: 'app/js/categories/articles/create/article-create.tmpl.html',
                controller: 'CreateArticleCtrl as createArticleCtrl'
            })
        ;
    })
    .controller('CreateArticleCtrl', function($state, $stateParams, ArticlesModel){
        var createArticleCtrl = this;

        function returnToArticles(){
            $state.go('blog.categories.articles',{
                category: $stateParams.category
            })
        }

        function cancelCreating(){
            returnToArticles();
        }

        function createArticle(){
            ArticlesModel.createArticle(createArticleCtrl.newArticle);
            returnToArticles();
        }

        function resetForm() {
            createArticleCtrl.newArticle = {
                image: '',
                title: '',
                category: $stateParams.category
            }
        }

        createArticleCtrl.cancelCreating = cancelCreating;
        createArticleCtrl.createArticle = createArticle;

        resetForm();
    })
;