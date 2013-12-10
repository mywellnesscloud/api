function setFullHeight() {
	if($(window).width() > 768) {
		var docHeight = $(document).height();
		if ($('.column').height() < docHeight){
			$('.column').css('height', docHeight +'px');
		}	
	}
}

function equalizeHeight() {
	$('.code-area').each(function(){
		$this = $(this);
		var height = $this.height();
		if(height > 1 && $this.siblings(".desc-area").height() < height) {
			var sumHeight = height + 80;
			$this.siblings(".desc-area").css("height", sumHeight);
		}
	});
}


$(function() {

	$('.collapse').collapse();

	equalizeHeight();

	setFullHeight();
	
});