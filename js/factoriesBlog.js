app.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://54.72.3.96:3000/posts';
    var dataFactory = {};

    dataFactory.getArticles = function () {
        return $http.get(urlBase);
    };

    return dataFactory;
}]);