angular.module('appBlog', [
	'ngAnimate',
	'ui.router',
	'categories',
	'categories.articles'
])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('blog', {
				url: '',
				abstract: true
			})
		;

		$urlRouterProvider.otherwise('/');
	})
;