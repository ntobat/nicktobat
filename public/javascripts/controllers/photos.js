angular.module('nickyT')
.controller('PhotosCtrl', ['$scope', function PhotosCtrl($scope){
	$scope.photos = [
		{
			src: '/images/photo1.jpg',
			caption: 'Devil\'s Kitchen burgers in Hobart, Tasmania'
		},
		{
			src: '/images/photo2.jpg',
			caption: 'Friendly Beach'
		},
		{
			src: '/images/photo3.jpg',
			caption: 'Sunrise at King\'s Beach I'
		},
		{
			src: '/images/photo4.jpg',
			caption: 'Blueberry pancakes in Cataract Gorge'
		},
		{
			src: '/images/photo5.jpg',
			caption: 'Ben Lomond'
		},
		{
			src: '/images/photo6.jpg',
			caption: 'Exultant atop Mt. Rufus'
		},
		{
			src: '/images/photo7.jpg',
			caption: 'Sheffield Caravan Park'
		},
		{
			src: '/images/photo8.jpg',
			caption: '*clink*'
		},
		{
			src: '/images/photo9.jpg',
			caption: 'Sunrise at King\'s Beach II'
		},
		{
			src: '/images/photo10.jpg',
			caption: 'Cornelian Bay'
		},
		{
			src: '/images/photo11.jpg',
			caption: 'Sunset behind a thunderhead'
		},
	];
}]);