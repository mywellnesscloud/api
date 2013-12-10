function setFullHeight() {
	if ($('.column').height() < $(document).height()){
		$('.column').css('height', $(document).height()+'px');
	}	
}

$(function() {

	setFullHeight();
	$('.collapse').collapse();
});