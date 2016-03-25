angular.module('nickyT')
.controller('IndexCtrl', ['$scope', function IndexCtrl($scope){
	$scope.tagline = 'lol';
	$scope.comics = [
		{
			strip: 'Wondermark',
			src: 'http://wondermark.com/c/2010-03-05-601chopsticks.gif',
			url: 'http://wondermark.com/601/'
		},
		{
			strip: 'Wondermark',
			src: 'http://wondermark.com/c/2011-09-19-757wolf.gif',
			url: 'http://wondermark.com/757/'
		},
		{
			strip: 'Hark! A Vagrant',
			src: 'http://www.harkavagrant.com/history/franklinfinal.png',
			url: 'http://www.harkavagrant.com/index.php?id=23'
		},
		{
			strip: 'Amazing SuperPowers',
			src: 'http://www.amazingsuperpowers.com/comics/2010-09-27-Inheritance-1-of-2.png',
			url: 'http://www.amazingsuperpowers.com/2010/09/inheritance-12/'
		}
	];
	$scope.randomComic = $scope.comics[Math.floor(Math.random() * $scope.comics.length)];
	//$scope.trustSrc = function(src) {
    //return $sce.trustAsResourceUrl(src);
	//};
}]);