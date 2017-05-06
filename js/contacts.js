
$(document).ready(function(){
	
    $("#contacts").click(function(){
		
		if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}

		
		if(!event.detail || event.detail==1){	

			$("#bckgrnd").fadeIn(500);
			$(this).hide();
			
			//big circle creation
			$("<div id='contacts1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css( [ "width","height","position",
									"top","left",'background-image',
									"border-radius"] );  
			$("#contacts1").css(styles);
			$("#contacts1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
			$("<div class='temp' >  </div>").appendTo("#contacts1"); 
			$(".temp").css({'height':'1.563rem',
							'position': 'absolute',
							'color':'white',	
							'top': '30%', 'left': '13%',
						});	
			$("<b id='head' > Get In Touch </b>").appendTo(".temp");
			$("#head").css({'font-size':'1.25rem', "font-family": "'Salsa', cursive" });		 
		    
		// creating the content and attaching to contentc element
		var contactstyle=({color:'white','font-size':'1.321rem','width':'100%',position:'absolute','line-height':'1.65rem',top:'116px'});
		var conntacthtml='<p style="text-indent:20%;"><span> Interacting personally with the people we love and care</span><br>'
		+'<span style="margin-left:13%">is one of the best things that could happen to us.</span><br></p>'
		+'<p style="text-indent:15%" ><span>Place of your choice or ours, discussion of your choice or ours,<br></span>'
		+'<span style="margin-left:8%;">we love a whole lot of topics, we are always ready.<br></span></p>'
		+'<span style="margin-left: 18%"> Just give a call to get started. True friendship starts here.</span></p>'
		+'<span style="font-size:50px;margin-left:31%;" >&#9990</span> <span style="font-size:xx-large"> +918985934435.</span>';
	  $("<div id='content' class='contentc'></div>").css(contactstyle).html(conntacthtml).appendTo("#contacts1").hide().delay(1000).fadeIn(300);
		




		   //animations 
			$("#contacts1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'3%',left:'35%'},700);
			$("#contacts1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem' },800);
            $("#head").delay(1000).queue(function(next){
					$(this).css("font-size","2.188rem");
					next();	
			});
 
			//close button 
			$("<div class='close' title='press esc to close'> </div>").appendTo(".bigc").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;top:0rem;right:0rem' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
			
			//on clicking close button
				$(".close").click(function(){
				var el = $.Event('keydown');
						el.which = 27; 
						$(document).trigger(el);	
				});
						
			
			//quote at the bottom
			$("<i id='quote' > </i>").appendTo("#contacts1");
			$("#quote").css({'position': 'absolute','bottom':'7%',
							'left':'22%','color':'white',
							'font-size':'1.125rem',
							'display':'none'});
			$("#quote").html("\" Sometimes a real talk can bring a smile on someone's <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp face. That's what makes us stay alive"
			+' \"' );
			$('#quote').delay(800).fadeIn(500);
	    }
	});		
});