angular.module('nickyT')
.directive('imgShow)', function(){
  return{
    restrict: 'E',
    transclude: true,
    template: '<section ng-transclude></section>',
    controller: 'PhotosCtrl'
  }
})