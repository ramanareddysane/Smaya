
$(document).ready(function(){
	
	$("#connect").click(function(){
		if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}
		
		  if(!event.detail || event.detail==1){		
			 $("#bckgrnd").fadeIn(500);
			 $(this).hide();
			
			//big circle creation
			$("<div id='connect1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css( [ "width","height","position",
									"top","left",'background-image',
									"border-radius"] );  
			$("#connect1").css(styles);
			$("#connect1").css("box-shadow","0rem 0rem 0.625rem black");
			
		//heading creation
			$("<div class='temp' >  </div>").appendTo("#connect1"); 
			$(".temp").css({'connect1': '1.563rem' ,'height':'1.563rem',
								'position': 'absolute',
							'color':'white',	
							'top': '40%', 'left': '20%',
						})	;					
			$("<b id='head' > Building Real <br> &nbsp  Relations </b>").appendTo(".temp");
			$("#head").css({'font-size':'1.25rem', "font-family": "'Salsa', cursive" });		 
			
		// creating content and adding to the main content	
				var connectstyles=({color:'white','font-size':'1.23rem','width':'100%',position:'absolute','line-height':'1.65rem',top:'116px'});
			var  connecthtml='<p style="text-indent:17%;margin-bottom:11%;"><span>We always refer this as heart of Smaya. We always wanted to</span><br>'	
				+'<span style="margin-left:11%"> build relations in real time.</span></p>'
				+'<p style="text-indent:10%;"><span>&#10004; Now you won\'t miss a friend just because you are busy checking your</span><br>' 
				+'<span style="margin-left:7%" >phone</span></p>'
				+'<p style="text-indent:5%;">&#10004; Now you don\'t make any friend feel bad because you are checking something <br>'
				+'<span style="margin-left:7%;"> on your phone and you are completely ignoring their presence.</p>'
				+'<p style="text-indent:5%;">&#10004; Now no relation will get weaker.</p>'
				+'<p style="text-indent:7%;">&#10004;Now no person will feel alone.</p>'
				+'<p style="text-indent:10%;">&#10004;Now we as a community build humanity together.</p>';
			$("<div id='content' class='contentc'></div>").css(connectstyles).html(connecthtml).appendTo("#connect1").hide().delay(1000).fadeIn(300);
			
			
			
		//animations 
			$("#connect1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'3%',left:'35%'},700);
			$("#connect1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem' },800);
			$("#head").delay(1000).queue(function(next){
				$(this).css("font-size","1.875rem");
				next();
			});
		//close button 
			$("<div class='close'  title='u can press esc too'> </div>").appendTo(".bigc").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;top:0rem;right:0rem' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
			
		
			//quote at the bottom
			  $("<i id='quote' > </i>").appendTo("#connect1");
			$("#quote").css({'position': 'absolute','bottom':'5%',
							'left':'26%','color':'white',
							'font-size':'1.25rem',
							'display':'none'});
			$("#quote").html("\" We need to share a real smile, a real talk. <br>"
			   +'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbspAfter all we are humans\"' );
			$('#quote').delay(800).fadeIn(500);
		
		  //on clicking close button
			$(".close").click(function(){
				var el = $.Event('keydown');
                el.which = 27; 
                $(document).trigger(el);	
			});
		}
		
	});
		
		
});