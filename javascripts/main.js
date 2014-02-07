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
	//console.log(window._collapse);

	accordionToggle();
	
	$('pre').each(function(i, e) {hljs.highlightBlock(e)});


	var path = window.location.pathname.split( '/' );
	var area = pathArray[1];
	console.log(area);
	
});