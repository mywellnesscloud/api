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

	//gestione path per mantenere aperto l'accordion nella sezione specifica
	var path = window.location.pathname.split( '/' );
	var area = path[2];
	$("#" + area).css("height", "auto").addClass("in");
	
});