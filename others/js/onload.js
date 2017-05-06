$(document).ready(function(){
// getting all the posts as cefault in the posts section..	
	$.post("onload.php")
	.done(function(data){
		$("#posts_section ul").append(data).addClass("default");			
	});
	
// cliking on the list for posts in specific category		
	$(".list").click(function(){
		var val=$(this).text();
		$(".list").each(function(){
			if($(this).text()!=val)
				$(this).css("color","white");
			else 
				$(this).css("color","black");
		});
		$.post("catpost.php",{'cat':val})
		.done(function(data){
			//alert("asdf")
			$(window).scrollTop();
			$("#posts_section ul").html("");
			$("#posts_section ul").append(data).removeClass().addClass(val);
			
		});
	});
	
 // clikcing the default button for default posts.
	$("#default").click(function(){
		$.post("onload.php")
		.done(function(data){
			$(".list").css("color","white");
			$("#posts_section ul").html(data).removeClass().addClass("default");
		});
	});
	
 // adjustin the positions in the posts circle
	var c=$("#postcircle");
	c.fadeIn(1234).css("display","flex");
	c.animate({top:'-=15%'},700,function(){
		c.css("z-index","1");
		// c.css('text-shadow','0.3125rem 0.3125rem 0.625rem black');
		c.css('box-shadow','0rem 0rem 3.125rem black');
		c.animate({top:"+=5%"},500);
	});
var bool=true;	
// hiding teh circle when scrolling
	$(window).scroll(function(){
			if(bool){
				bool=false;
				var sc=$(this).scrollTop();
				var t=$("#postcircle"); 
				c.css({"z-index":"2","position":"fixed"}).animate({top:'-=15%'}, 700);
				$("header").css({"z-index":"1","box-shadow":"0rem 0.625rem 0rem white"}).animate({height:"20%",position:"fixed",top:""},500);
				$('.cat_section').css("position","fixed").animate({top:"20%"},500);	
				$('#posts_section').css("position","absolute").animate({top:"-=5%"},500);
					
			}
			if($(this).scrollTop()==0){
				 bool=true;
				c.css({"z-index":"2","position":"fixed"}).animate({top:'+=15%'}, 700);
				$("header").css({"z-index":"initial","box-shadow":"initial"}).animate({height:"25%",position:"initial",top:"initial"},500);
				$('.cat_section').animate({top:"25%"},500);	
				$('#posts_section').animate({top:"+=5%"},500)
			}		
	});
	
});