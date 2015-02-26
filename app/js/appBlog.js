/*(function() {
	var app = angular.module('appBlog', []);
	app.factory('dataFactory', ['$http', function($http) {
		var urlBase = 'http://54.72.3.96:3000/posts';
		var dataFactory = {};
		dataFactory.getArticles = function () {
			return $http.get(urlBase);
		};
		return dataFactory;
	}]);
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
})();*/

angular.module('appBlog', [

])
	.controller('MainCtrl', function ($scope) {
		$scope.categories = [
			{"id": 0, "name": "Front-End"},
			{"id": 1, "name": "AngularJS"}
		];

		$scope.articles = [
			{
				"id": 0,
				"image": "http://elements.epam.com/content/dam/epam-elements/Visual_guidelines_top.jpg",
				"title": "Why AngularJS?",
				"date": "2015-19-02",
				"author": "Vital",
				"text": "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.",
				"category": "AngularJS"
			},
			{
				"id": 1,
				"image": "http://www.icr.org/i/wide/iceberg_wide.jpg",
				"title": "Alternatives",
				"date": "2015-19-02",
				"author": "Vital",
				"text": "Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views.",
				"category": "AngularJS"
			},
			{
				"id": 2,
				"image": "http://www.engin.umich.edu/college/departments/images/mpowered-startup-career-fair",
				"title": "Terrible JavaScript Mistakes To Avoid With A Static Code Analyzer",
				"date": "2015-23-02",
				"author": "Vital",
				"text": "Hardly any line of my code comes out perfect the first time I write it. Well, most of the time… Some of the time… Um, hardly ever. The truth is that I spend more time chasing down my own stupid programming errors than I’d like to admit. That’s why I use static analyzers in every JavaScript file I write.",
				"category": "Front-End"
			}
		];

		$scope.currentCategory = {"name":''};

		function setDefaultCategory() {
			$scope.currentCategory = {"name":''};
		}

		function setCurrentCategory(category) {
			$scope.currentCategory = category;

			cancelCreating();
			cancelEditing();
		}

		function isCurrentCategory(category) {
			return $scope.currentCategory !== '' && category.name === $scope.currentCategory.name;
		}

		$scope.setCurrentCategory = setCurrentCategory;
		$scope.isCurrentCategory = isCurrentCategory;
		$scope.setDefaultCategory = setDefaultCategory;

		$scope.editedArticle = null;

		function setEditedArticle(article) {
			$scope.editedArticle = angular.copy(article);
		}

		function isSelectedArticle(articleId) {
			return $scope.editedArticle !== null && $scope.editedArticle.id === articleId;
		}

		$scope.setEditedArticle = setEditedArticle;
		$scope.isSelectedArticle = isSelectedArticle;

		$scope.newArticle = {};

		function resetCreateForm() {
			$scope.newArticle = {};
		}

		function deleteArticle(article) {
			_.remove($scope.articles, function (item) {
				return item.id == article.id;
			});
		}

		$scope.deleteArticle = deleteArticle;

		//--------------------------------------------
		// Create and Update States
		//--------------------------------------------

		function createArticle(article) {
			article.id = $scope.articles.length;
			article.category = $scope.currentCategory.name;
			$scope.articles.push(article);

			resetCreateForm();
		}

		function updateArticle(article) {
			var index = _.findIndex($scope.articles, function (a) {
				return a.id == article.id
			});
			$scope.articles[index] = article;

			$scope.editedArticle = null;
			$scope.isEditing = false;
		}

		$scope.updateArticle = updateArticle;
		$scope.createArticle = createArticle;

		//--------------------------------------------
		// Creating and Editing States
		//--------------------------------------------

		$scope.isCreating = false;
		$scope.isEditing = false;

		function shouldShowCreating() {
			return $scope.currentCategory && !$scope.isEditing;
		}

		function startCreating() {
			$scope.isCreating = true;
			$scope.isEditing = false;
		}

		function cancelCreating() {
			$scope.isCreating = false;
		}

		$scope.shouldShowCreating = shouldShowCreating;
		$scope.startCreating = startCreating;
		$scope.cancelCreating = cancelCreating;

		function shouldShowEditing() {
			return $scope.isEditing && !$scope.isCreating;
		}

		function startEditing() {
			$scope.isCreating = false;
			$scope.isEditing = true;
		}

		function cancelEditing () {
			$scope.isEditing = false;
		}

		$scope.shouldShowEditing = shouldShowEditing;
		$scope.startEditing = startEditing;
		$scope.cancelEditing = cancelEditing;



	})
;