(function() {
	var app = angular.module('appBlog', []);

	app.controller('GetPosts', function($scope, $http) {
		$http.get('http://54.72.3.96:3000/posts')
			.then(function(responce){
				$scope.posts = responce.data;
			});
	});

})();