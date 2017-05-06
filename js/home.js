$(document).ready(function(){
	$("#val").click(function(){
		$("#about").hide();
		$("#values").show();
		$(this).css('font-size','1.625rem');
		$("#abs").css('font-size','1.25rem');

	});
	
	$("#abs").click(function(){
		$(this).css('font-size','1.625rem');
		$("#val").css('font-size','1.25rem');
		$("#values").hide();
		$("#about").show();
	});
	
});