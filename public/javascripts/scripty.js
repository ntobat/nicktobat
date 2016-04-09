$(function(){

	$('a.samplink').on("touchstart", function(e){
		'use strict';
		var link = $(this);
		if (link.hasClass('hover')){
			return true;
		} else {
			link.addClass('hover');
			$('a.samplink').not(this).removeClass('hover');
			e.preventDefault();
			return false;
		}
	});

});