$(document).ready(function(){
 //getting additional posts
	$(window).scroll(function(){
		var dh=$(document).height();
		var wh=$(window).height();	
		var st=$(window).scrollTop();	
			var a=$(window).scrollTop()+screen.height;
			var s=$(document).height();
			var ex=$("#posts_section ul li").last().attr('class');
			if( ex != "extra"){
				if((dh-wh-st)<=50){
					$("#posts_section ul").append("<li class='extra'  style='list-style:none;border-bottom:0.125rem solid white;width:95%;height:30%;float:left;'>");
					var cls=$("#posts_section ul").attr('class');
					if(cls=="default"){
						var chi=$("#posts_section ul").children().length - 1;
						$.post("getmoredef.php",{child:chi})
						.done(function(res){
						if(res==0){
								$("#posts_section ul li").last().remove();	
								$("#posts_section ul li").last().html("<div align='center' style='width:95%;height:12.5rem;float:left'>there are no other posts</div>");
							}
							else{
								$("#posts_section ul li").last().remove();
								$("#posts_section ul").append(res);								
							}
						});
					}else {
						var chi=$("#posts_section ul").children().length - 1;
						if(chi < 3){
							$("#posts_section ul li").last().remove();	
							return;
						}
						var cat=$("#posts_section ul").attr("Class");
						$.post("getmoredef.php",{child:chi,catg:cat})
						.done(function(res){
							if(res==0){	
								$("#posts_section ul li").last().html("<div align='center' style='width:95%;height:12.5rem;float:left'>there are no other posts</div>");
							}
							else{
									
								$("#posts_section ul li").last().remove();
								$("#posts_section ul").append(res);								
							}
						});
					} // 
				} // checking whether it actully reaches bottom of hte page				
			} // checking the class name 'extra' ie., whether it alredy sent a request				
	});	
});