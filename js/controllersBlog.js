app.controller('GetPosts', ['$scope', 'dataFactory', function ($scope, dataFactory) {

        $scope.status;
        $scope.articles;

        getArticles();

        function getArticles() {
            dataFactory.getArticles()
                .success(function (data) {
                    $scope.articles = data;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

}]);