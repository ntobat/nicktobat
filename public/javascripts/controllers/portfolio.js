angular.module('nickyT')
.controller('PortfolioCtrl', ['$rootScope', '$scope', function PortfolioCtrl($rootScope, $scope){
  $rootScope.title = "Nicholas Tobat - Portfolio";
  $scope.samples = [
  	{
  		name: 'Learn Sense Grow',
  		sdesc: 'Occupational Therapy business in Adelaide, South Australia. Built with WordPress and custom styles.',
  		link: '//www.learnsensegrow.com.au',
  		imgurl: 'lsg.png',
  		id: 1
  	},
  	{
  		name: 'William Harley & Son',
  		sdesc: 'Local family bookbinding business in Adelaide, South Australia. Built from scratch with Bootstrap and custom styles.',
  		link: '//www.wharley.com.au',
  		imgurl: 'wharley.png',
  		id: 2
  	},
  	{
  		name: 'Gordon & Co',
  		sdesc: 'Boutique financial planning firm in Northern Virginia. Built with GoDaddy Website Builder and custom styles.',
  		link: '//www.gordonandcocpas.com',
  		imgurl: 'gordon.png',
  		id: 3
  	}
  ];
}]);