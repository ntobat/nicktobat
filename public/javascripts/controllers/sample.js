angular.module('nickyT')
.controller('SampleCtrl', ['$scope', '$http', '$routeParams', function SampleCtrl($scope, $http, $routeParams){
  var controller = this;
  $http({method: 'GET', url: '/portfolio' + $routeParams.id})
  	.success(function(data){
  	  controller.sample = data;
  	});
}]);