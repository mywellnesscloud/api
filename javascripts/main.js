function setFullHeight() {
	var windowHeight = $(window).height() + "px";
	$(".navigation").css("height", windowHeight);
	$(".desc-area").css("height", windowHeight);
	$(".code-area").css("height", windowHeight);
}

$(function() {

	setFullHeight();

	$('.collapse').collapse();

});