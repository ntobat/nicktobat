angular.module('nickyT')
.controller('PhotosCtrl', ['$scope', function PhotosCtrl($scope){
	$scope.photos = [
		{
			src: '/images/toucan.png',
			caption: ' '
		},
		{
			src: '/images/hoverbot.png',
			caption: ' '
		},
		{
			src: '/images/bear.png',
			caption: ' '
		},
		{
			src: '/images/audrey.png',
			caption: ' '
		},
		{
			src: '/images/keira.png',
			caption: ' '
		},
		{
			src: '/images/pinata.png',
			caption: ' '
		},
		{
			src: '/images/outdoor.png',
			caption: ' '
		}
	];
}]);