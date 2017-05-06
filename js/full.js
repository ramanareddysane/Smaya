$(document).ready(function(){
	setTimeout(function(){
		var h=$("#bubbles").height(), w=$("#bubbles").width(), wh=$(window).height(), ww=$(window).width();
		// alert(""+ h +"and"+ w +"and" + wh + "and" + ww);
		if((ww - w)>10){
 		 	var m=(ww-w)/2;
			var s=""+m+"px"
			$("#bubbles").css({'margin-left':s});
			// alert(m);
		}
	},1);
	
	// FOR DISPLAYING THE VIDEOS
	$(".v").click(function(){
			$("#vb").show();
			
			if($(this).attr('id')=="sim"){
				$("<iframe  class='simon' style='z-index:20' src='https://www.youtube.com/embed/4VdO7LuoBzM?autoplay=1' frameborder='0' allowfullscreen></iframe>")
				.appendTo("body")
				.hide().delay(3234).fadeIn(500);
			}
			else {
				$("<iframe  class='gary' style='z-index:20' src='https://www.youtube.com/embed/Z7dLU6fk9QY?autoplay=1' frameborder='0' allowfullscreen></iframe>")
				.appendTo("body")
				.hide().delay(3234).fadeIn(500);
			}
			$("<button id='cls'> close</button>").appendTo("#vb").css({'cursor':'pointer','background':"none","color":"white","position":"absolute","top":"1.25rem","right":"1.25rem"});
	});	
	$(window).keydown(function(e){
		if(e.which==27){
			$("iframe").hide().remove();
			$("#vb").hide();			
		}
	});
	$("#vb").on("click","#cls",function(){

		$("iframe").hide().remove();
		$("#vb").hide();
	});
	
	$("#register").click(function(){
		window.location = "http://register.smaya.co";	
	});

	$("#blog").click(function(){
		window.location = "http://blog.smaya.co";	

	});	

	$("#sic").click(function(){
		window.location = "http://innovationclub.smaya.co/";	
	});	
});



