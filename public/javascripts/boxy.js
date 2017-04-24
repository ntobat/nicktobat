$(function(){

	angular.element('a.photos').on("click", function(){
		angular.element('#overlaid').addClass('shown');
	});

});