$('document').ready(function(){
	var childs=0;
	childs=$(".main-article").children().length;
	$.post('getpost.php',{childs:childs})
	.done(function(res){
		$(".main-article").append(res);
	});
	$(window).scroll(function(){ 
		 childs=$(".main-article").children().length;
		// console.log($(window).scrollTop() == ($(document).height() - $(window).height()));
		if($(window).scrollTop() == ($(document).height() - $(window).height())){			
			$("#loading").finish().slideDown(534);	
			$.post('getpost.php',{childs:childs})
			.done(function(res){
				$("#loading").finish().delay(4312).slideUp(421);	
					if(res!=0)
						$(".main-article").append(res);
					else if(res==0 && $(".main-article").children().last().attr('id')!="last")
						$(".main-article").append('<div id="last" style="display:table;margin:82px auto"> You have covered all the posts </div>');
			});
		}
	})

});



