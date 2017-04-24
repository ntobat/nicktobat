angular.module('nickyT')
.controller('ImagesCtrl', ['$scope', function ImagesCtrl($scope){
	$scope.photos = [
		{
			src: '/images/toucan.png',
			caption: ' ',
			numbah: 0
		},
		{
			src: '/images/hoverbot.png',
			caption: ' ',
			numbah: 1
		},
		{
			src: '/images/bear.png',
			caption: ' ',
			numbah: 2
		},
		{
			src: '/images/audrey.png',
			caption: ' ',
			numbah: 3
		},
		{
			src: '/images/keira.png',
			caption: ' ',
			numbah: 4
		},
		{
			src: '/images/pinata.png',
			caption: ' ',
			numbah: 5
		},
		{
			src: '/images/outdoor.png',
			caption: ' ',
			numbah: 6
		},
		{
			src: '/images/love.png',
			caption: ' ',
			numbah: 7
		}
	];
	$scope.larges = [
		{
			src: '/images/toucan-lg.png',
			caption: ' ',
			numbah: 0
		},
		{
			src: '/images/hoverbot-lg.png',
			caption: ' ',
			numbah: 1
		},
		{
			src: '/images/bear-lg.png',
			caption: ' ',
			numbah: 2
		},
		{
			src: '/images/audrey-lg.png',
			caption: ' ',
			numbah: 3
		},
		{
			src: '/images/keira-lg.png',
			caption: ' ',
			numbah: 4
		},
		{
			src: '/images/pinata-lg.png',
			caption: ' ',
			numbah: 5
		},
		{
			src: '/images/outdoor-lg.png',
			caption: ' ',
			numbah: 6
		},
		{
			src: '/images/love-lg.png',
			caption: ' ',
			numbah: 7
		}
	];
	$scope.className = "hided";
	$scope.changeClass = function(){
		if($scope.className === "hided")
			$scope.className = "shown";
		else
			$scope.className = "hided";
	};
}]);