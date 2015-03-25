angular.module('blog.models.articles',[

])
    .service('ArticlesModel',function($http, $q){
        var model = this,
            URLS = {
                FETCH: 'data/articles.json'
            },
            articles;

        function extract(result) {
            return result.data;
        }

        function cacheArticles(result) {
            articles = extract(result);
            return articles;
        }

        function findArticle(articleId){
            return _.find(articles, function(article){
                return article.id === parseInt(articleId, 10);
            })
        }

        model.getArticleById = function(articleId) {
            var deferred = $q.defer();

            if (articles) {
                deferred.resolve(findArticle((articleId)));
            } else {
                model.getArticles().then(function(){
                    deferred.resolve(findArticle(articleId));
                })
            }

            return deferred.promise;
        }

        model.getArticles = function() {
            return (articles) ? $q.when(articles) : $http.get(URLS.FETCH).then(cacheArticles);
        }

        model.createArticle = function(article) {
            article.id = articles.length;
            articles.push(article);
        }

        model.updateArticle = function(article) {
            var index = _.findIndex(articles, function(a){
                return a.id == article.id;
            })

            articles[index] = article;
        }

        model.deleteArticle = function(article) {
            _.remove(articles, function(a){
                return a.id == article.id;
            })
        }
    })
;