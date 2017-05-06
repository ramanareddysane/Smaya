$(document).ready(function(){
	
    $("#help").click(function(){
		
		if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}
		
		
		if(!event.detail || event.detail==1){	

			$("#bckgrnd").fadeIn(500);
			$(this).hide();
			
			//big circle creation
			$("<div id='help1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css( [ "width","height","position",
									"top","left",'background-image',
									"border-radius"] );  
			$("#help1").css(styles);
			$("#help1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
			$("<div class='temp'></div>").appendTo("#help1"); 
			$(".temp").css({'height':'1.563rem',
							'position': 'absolute',
							'color':'white',	
							'top': '20%', 'left': '16%',
						  });	
			$("<b id='head' >Help Humanity</b>").appendTo(".temp");
			$("#head").css({'font-size':'1.475rem', "font-family": "'Salsa', cursive" });	
			
		//help content creation
		var helptyles=({color:'white','font-size':'1.23rem','width':'100%',position:'absolute','line-height':'1.65rem',top:'150px'});
			var  helphtml='<p style="margin-bottom:2rem"><span style="margin-left:14%" >We are not here to just make millions and exit, we are here to help</span><br>'
			+'<span style="margin-left:9%;">humanity exist and evolve.</span></p>'
			
			+'<p class="if">If you have the  guts to stand on what\'s right, </p>'
			+'<p class="if">If you have the  passion to make humans better and better,<br></p>'
			+'<p class="if">If your dream is to change the world, literally,<br><br></p>'
			+'<span style="margin-left:36%">JOIN US. We mean it. <br></span>'
			
			+'<span style="margin-left:30.5%;"> Let\'s build humanity together.<br><br></span>'
			+'<span style="margin-left:11%;"> We hate resumes, send your portfolio\'s, if any to smayainfo@gmail.com';
		  $("<div id='helpcontent' class='contentc'></div>").css(helptyles).html(helphtml).appendTo("#help1").hide().delay(1000).fadeIn(400);
			$(".if").css({"margin-left":"20%","margin-bottom":'5px',"margin-top":"10px"});

			
		//animations 
			$("#help1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'6%',left:'33%'},700);
			$("#help1").animate({top:'10%',left:'22%',width:'43.75rem',height:'43.75rem' },800);
		    $("#head").delay(700).queue(function(next){
					$(this).animate({"font-size":"2.125rem"},500);
					next();	
			});
			
		//close button 
			$("<div class='close' title='u can press esc too' > </div>").appendTo(".bigc").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;top:0rem;right:0rem' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
			
			//on clicking close button
				$(".close").click(function(){
				var el = $.Event('keydown');
						el.which = 27; 
						$(document).trigger(el);	
				});
			
		
			//quote at the bottom
			$("<i id='quote' > </i>").appendTo("#help1");
			$("#quote").css({'position':'absolute','bottom':'12%',
							'left':'19%','color':'white',
							'font-size':'1.2343rem',
							'display':'none'});
			$("#quote").html("\" If world need to be changed its worth changing, <br> "
			+' &nbsp &nbsp &nbsp &nbsp &nbsp and to be part of that journey is worth being\".' );
			$('#quote').delay(800).fadeIn(500);

	
	    }
	});
	
		
});