$(document).ready(function(){
		$("#chat > .b").click(function(){
			//close button 
			$("<div class='close'  title='u can press esc too'> </div>").appendTo("#chat").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;right:0rem;top:-1.875rem;' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
			
			$("#chat").find('> .b').hide();
			$("#chat").css("cursor","default");
			$("#chat").delay(100).animate({width:'420',height:'420'},700);
			var styles={'width':'86%','border-radius':'0.625rem','outline':'none','font-size':'0.9375rem','height':'2.313rem','margin-left':'7%','margin-top':'7%','padding-left':'0.9375rem'};
			$("<input id='nam'  placeholder='Enter your name '></input>").appendTo("#chat").css(styles).hide().delay(600).slideDown(334);
			$("<input id='email' placeholder='Your email please'></input>").appendTo("#chat").css(styles).hide().delay(800).slideDown(334);
			$("<textarea placeholder='Words that matter' style='font-size:130%' ></textarea>").appendTo("#chat").css(styles);
			$("textarea").css({"height":"42%",'overflow':'auto',"resize":"none"}).hide().delay(1000).slideDown(634);
			var but={"width":"60%","margin-left":"20%","padding":"0.3125rem","outline":"none","cursor":"pointer","margin-top":"3%","border-radius":"1.875rem 0rem 1.875rem 0rem"};
			$("<button>Send it now</button>").css(but).appendTo("#chat").hide().delay(1600).show("slide");
		});
			
		$("#chat").on("click","button",function(){
			var t=$("#chat");
			var nam=t.find("#nam").val();
			var em=t.find("#email").val();
			var msg=t.children("textarea").val();
		// sending the actual mail			
			$.post("mail.php",{name:nam,email:em,message:msg})
			.done(function(data){
				alert(data);
				$("#chat").children().not(".b").remove();
				$("#chat").animate({width:'130',height:"130"});
				$("#chat").find(".b").delay(400).show(2);
			});
		});
		
		$("#chat").on("click","img",function(){
			$("#chat").children().not(".b").remove();
			$("#chat").animate({width:'130',height:"130"});
			$("#chat").find(".b").delay(400).show(2);			
		});	
});
