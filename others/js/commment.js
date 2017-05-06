$(".posts").ready(function(){
// opening the complete post	
		$("ul").off('click','div.post_text_container').on('click','div.post_text_container' ,function(){	
			var t=$(this);
			t.clearQueue();
			if(t.height() < t.prop('scrollHeight')){
				//$("div.post_text_container").css("height","20%");
				// $(".post_text_container").animate({height:'20%'},{ queue: false });	
				
				t.animate({height:t.prop('scrollHeight')},500);	
			}
			if(t.height() == t.prop('scrollHeight')){
				
				t.animate({height:'9.375rem'},500);
			}	
		});
		
// for displaying cursor on the post content	
		$("ul").on('mouseenter','div.post_text_container' ,function(){	
			var t=$(this);
			// alert(t.height());
			// alert(t.prop('scrollHeight'))
			if(t.height() < t.prop('scrollHeight')){
				t.css("cursor","pointer");
			}
		});
		
//on entering the name in input field.	
		$("ul").on("blur","input",function(){
				var im=$(this).parents(".comment");
				var nam=$(this).val();
				$.ajax({
					method:"post",
					url:"img1.php",
					data:{name:nam}
				}).done(function(data){
				// $('#imd').html('<img src="data:image/png;base64,'+data+'" />');			
					if(data.length!=120)			  		
						im.find(".cmg").replaceWith('<img class="cmg" style="float:left;width:3.125rem;height:3.125rem;border-radius:50%;margin-left:0.625rem;" src="data:image/png;base64,'+data+'" />')
					 else 
						im.find(".cmg").replaceWith('<img class="cmg" style="float:left;width:3.125rem;height:3.125rem;border-radius:50%;margin-left:0.625rem;" src="1.gif"/>')					 
							// alert(data.length);
				});
		});
//on clicking the comment button
	$("ul").on("click",".cmntb",function(){
		var t=$(this);
		var l=t.parents('.total_post');
		var	pu_id=l.attr('id');
		var cmnt_text=l.find('textarea').val();
		var cmnt_by=l.find('input').val();
		l.find('input').val("");
		l.find('.cmg').attr("src","1.gif");
		l.find('textarea').val("");
		l.find(".showmore").show();
		
		if(cmnt_text.length==0 || cmnt_by.length==0){
			alert("it seems thet u have missed something")
			return;
		}
	// sending request to save and display the comment
		$.post("savecomment.php",{content:cmnt_text,by:cmnt_by,under:pu_id})
		.done(function(data){
			l.find(".showmore").text("hide").show();
			// alert(l.find("li > .comment").parent().prop('tagName'));
			$(data).insertBefore(l.find("li > .comment").parent());
			$("ul").on("click",".showmore");	
			// l.find(".comment_item").show();	
		});
	});

//handling hide and show comments
	$("ul").on("click",".showmore",function(){
		var sib=$(this).next().children().find(".comment_item");
		// sib.clearQueue();
		 // alert(sib.attr('class'));
		sib.stop(true,true).slideToggle();
		if($(this).text()=="hide")
			$(this).text("show");
		else
			$(this).text("hide");
	});
	
});