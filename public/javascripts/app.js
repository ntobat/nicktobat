angular.module('nickyT', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/views/home',
			controller: 'IndexCtrl',
			title: 'Nicholas Tobat'
		})
		.when('/home', {
			templateUrl: '/views/home',
			controller: 'IndexCtrl',
			title: 'Nicholas Tobat'
		})
		.when('/about', {
			templateUrl: '/views/about',
			controller: 'AboutCtrl',
			title: 'About Nick'
		})
		.when('/portfolio', {
			templateUrl: '/views/portfolio',
			controller: 'PortfolioCtrl',
			title: 'Portfolio'
		})
//		.when('/portfolio/:id', {
//			templateUrl: '/views/sample',
//			controller: 'SampleCtrl'
//		})
		.when('/photos', {
			templateUrl :'/views/photos',
			controller: 'PhotosCtrl',
			title: 'Portfolio'
		})
//		.when('/photos/:id', {
//			templateUrl :'/views/photo',
//			controller: 'PhotoCtrl'
//		})
		.when('/musings', {
			templateUrl: '/views/musings',
			controller: 'MusingsCtrl'
		})
//		.when('/musings/:id', {
//			templateUrl: '/views/musing',
//			controller: 'MusingCtrl'
//		})
		.when('/contact', {
			templateUrl: '/views/contact'
		})
		.otherwise({ redirectTo: '/home' });

		$locationProvider.html5Mode(true);
}]);