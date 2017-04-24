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
		.when('/images', {
			templateUrl :'/views/images',
			controller: 'ImagesCtrl',
			title: 'Images'
		})
//		.when('/photos/:id', {
//			templateUrl :'/views/photo',
//			controller: 'PhotoCtrl'
//		})
		.when('/musings', {
			templateUrl: '/views/musings',
			controller: 'MusingsCtrl',
			title: 'Musings'
		})
//		.when('/musings/:id', {
//			templateUrl: '/views/musing',
//			controller: 'MusingCtrl'
//		})
		.when('/contact', {
			templateUrl: '/views/contact'
		})
		.when('/vcu', {
			templateUrl: '/views/vcu',
			controller: 'VcuCtrl',
			title: 'VCU'
		})
		.when('/vcu-1', {
			templateUrl: '/views/vcu-1',
			controller: 'VcuCtrl',
			title: 'Section 1'
		})
		.when('/vcu-2', {
			templateUrl: '/views/vcu-2',
			controller: 'VcuCtrl',
			title: 'Section 2'
		})
		.when('/vcu-3', {
			templateUrl: '/views/vcu-3',
			controller: 'VcuCtrl',
			title: 'Section 3'
		})
		.when('/vcu-4', {
			templateUrl: '/views/vcu-4',
			controller: 'VcuCtrl',
			title: 'Section 4'
		})
		.when('/vcu-5', {
			templateUrl: '/views/vcu-5',
			controller: 'VcuCtrl',
			title: 'Section 5'
		})
		.when('/vcu-6', {
			templateUrl: '/views/vcu-6',
			controller: 'VcuCtrl',
			title: 'Section 6'
		})
		.when('/photo-test', {
			templateUrl: '/views/photo-test',
			controller: 'TestCtrl'				   // DON'T FORGET TO DELETE THIS
		})
		.otherwise({ redirectTo: '/home' });

		$locationProvider.html5Mode(true);
}]);