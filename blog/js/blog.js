$(document).ready(function(){
	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});
	$("h2").fitText(1.1, { minFontSize: '15px', maxFontSize: '20px' });
	$("#second").hide();	
	$(window).scroll(function(){
	   if ($(this).scrollTop() > 5){  
			$('.mainheader').addClass("header1");
			$("#first").fadeOut();
			$(".altfb").animate({top:'6%'});
			$(".logo").stop().animate({width:'160px',height:'80px',top:'20px',left:'20px'},400,function(){
				$("#second").fadeIn();
			});
	   } 
	$(".main-article").animate({top:'155px'}); 
	});

	$(".main-article").on("click",".middle .get",function(){
	     	var postid;
			postid=$(this).children().attr("class");
			//alert(postid);
			window.open(
					"fullpost.php?id="+postid+"",
					'_blank' 
				);
		
	});
	
	$(".main-article").on("click",".share img",function(e){	
		var imgid=$(this).attr('id');
		var id=$(this).parent().parent().attr("id");
		if(imgid=="fbs")
		var	url="https://www.facebook.com/sharer/sharer.php?u="+window.location.href+"fullpost.php?id="+id;
		else if(imgid=="gps")
			var url="https://plus.google.com/share?url="+window.location.href+"fullpost.php?id="+id;
		else 	
			var url="https://twitter.com/home?status="+window.location.href+"fullpost.php?id="+id;
	
		window.open(url,'','height=300,width=600, top=150px, left=400px');
		});
		
		$(".altfb").click(function(){
			var url="https://www.facebook.com/smayacompany";
			window.open(url);
		});	

	
						
});