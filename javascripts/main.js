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


function accordionToggle() {
	$('#accordion div').on('show.bs.collapse', function () {
		$(this).find("span").removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
	});
	$('#accordion div').on('hide.bs.collapse', function () {
		$(this).find("span").removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
	});
}



$(function() {

	$('.collapse').collapse();

	equalizeHeight();

	setFullHeight();

	accordionToggle();

	$("desc-area h2").each(function(index, el) {
		console.log(index + ", " + el);
	});
	
});