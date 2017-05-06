
$(document).ready(function(){
	
    $("#journey").click(function(){

		if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}
		
		
		if(!event.detail || event.detail==1){	

			$("#bckgrnd").fadeIn(500);
			$(this).hide();
			
			//big circle creation
			$("<div id='journey1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css( [ "width","height","position",
									"top","left",'background-image',
									"border-radius"] );  
			$("#journey1").css(styles);
			$("#journey1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
			$("<div class='temp' >  </div>").appendTo("#journey1"); 
			$(".temp").css({'journey1': '1.563rem' ,'height':'1.563rem',
							'position': 'absolute',
							'color':'white',	
							'top': '40%', 'left': '20%',
						});	
			$("<b id='head' > Journey </b>").appendTo(".temp");
			$("#head").css({'font-size':'1.688rem', "font-family": "'Salsa', cursive" });		 
		 
			//animations 
			$("#journey1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'3%',left:'40%'},700);
			$("#journey1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem' },800);
			$("#head").delay(1200).queue(function(next){
					$(this).css("font-size","2.5rem");
					next();	
			});
			
		// creating the content and adding to it...
			var journeystyle=({color:'white','font-size':'1.321rem','width':'100%',position:'absolute','line-height':'1.65rem',top:'100px'});
			var journeyhtml='<p style="text-indent:26%;"><span>We make mistakes, we learn soon. After all that\'s</span><br>'
			+'<span style="margin-left:13%;"> life. This sentence "Everything is a learning experience", backs<br></span>'
			+'<span style="margin-left:10%;">  us up every time we have done something wrong.</span></p>'
			+'<p style="text-indent:18%;">The courage to change the world, the guts to stand on what\'s <br>'
			+'<span style="margin-left:6%;">right brought us here. </span></p>'
			+'<p style="text-indent:20%;"> One year back we started with a completely different product,<br>'
			+'<span style="margin-left:4%;"> working on that we found out our correct product-market fit.</span></p>'
			+'<p style="text-indent:15%;"> Being college entrepreneurs, those meetings at canteen, long walks <br>'
			+'<span style="margin-left:5%;"> around the campus, discussing stuff were memories no one can ever dare </span><br>'
			+'<span style="margin-left:7%;"> to forget.</span></p>'
			+'<p style="text-indent:17%;"> We just started our journey. Every day we feel excited to start '
			+'<span style="margin-left:11%;">fresh. That\'s what this entrepreneurial journey is all about.</span></p>'
			+'<p style="text-indent:20%;"> Having a clear vision from the first day helped us a lot.<br>'
			+'<span style="margin-left:31%;">That\'s what makes us special.</span></p>';
		  $("<div id='journeycontent' class='contentc'></div>").css(journeystyle).html(journeyhtml).appendTo("#journey1").hide().delay(1000).fadeIn(300);			
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
			$("<i id='quote' > </i>").appendTo("#journey1");
			$("#quote").css({'position':'absolute','bottom':'5%',
							'left':'27%','color':'white',
							'font-size':'1.2rem','width':'100%',
							'display':'none'});
			$("#quote").html("<span>\"It's never about the destination,</span> <br>"
			+'<span style="margin-left:14%;"> it\'s all about the journey"</span>');
			$('#quote').delay(800).fadeIn(500);			
	    }
	});
	
		
});