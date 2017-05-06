$(document).ready(function(){
	
	$("#names").click(function(){
		
		if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}

		
		if(!event.detail || event.detail==1){	
		
			$("#bckgrnd").fadeIn(500);
			$(this).hide();
			
			//big circle creation
			$("<div id='names1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css( [ "width","height","position",
									"top","left",'background-image',
									"border-radius"] );  
			$("#names1").css(styles);
			$("#names1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
			$("<div class='temp'>  </div>").appendTo("#names1"); 
			$(".temp").css({'height':'1.563rem',
							'position': 'absolute',
							'color':'white',	
							'top': '35%', 'left': '16%',
						   });	
			 $("<b id='head' > Naming </b>").appendTo(".temp");
			 $("#head").css({'font-size':'1.875rem', "font-family": "'Salsa', cursive" });		 
			 
			///// creating the content and adding to main content 
		   var nstyles=({color:'white','font-size':'1.13rem',borer:'2px solid silver',position:'absolute','line-height':'1.6rem',top:'130px'});
		   var nameshtml="<p style='text-indent:18%'>We know, our names sound different, some may define it as weird. <br>"
				+'  <span style="margin-left:9%">That\'s what defines us. We are weird enough to name everything with a deep </span><br>'
				+'<span style="margin-left:7%" >inner meaning. We are proud of that.</span></p>'
				+'<p style="text-indent:8.5%;margin-bottom:5%;"><span class="first"> Smaya </span> means SMILE. Everything around us is defined by this term \' smile \'.<br>'
				+' <span style="margin-left:4%;">We believe this is the basic thing which differs humans from other animals. So we want<br></span>'
				+'<span style="margin-left:3%">you to share a real smile every day, every time.</span></p>'
				
				+' <p style="text-indent:7%"> <span class="first"> Nimi</span> means FRIEND OF FIRE, we are truly \'friends of fire\'. This defines the fire <br>'
				+' <span style="margin-left:3%"> we carry to make this world better and better every day. </p>'
				+' <p style="text-indent:9%;margin-top:5%;"> <span class="first"> Aapi</span> means BEST FRIEND. We always revered friendship. We feel that\'s a <br>'
				+'<span style="margin-left:7%">great gift humanity has ever received. So building friendship, maintaining strong</span>'
				+' <span style="margin-left:9%">friendships are what we meant for. </p>';
	$("<div id='namingcontent' class='contentc'></div>").css(nstyles).html(nameshtml).appendTo("#names1").hide();
	$(".first").css({"font-family":'"Courier New", Courier, monospace',"font-size":"150%",'font-style':'italic'});
	
			//animations 
			$("#names1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'3%',left:'33%'},700);
			$("#names1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem' },800);
			$("#head").delay(1200).queue(function(next){
					$(this).html("<b> Naming Story </b>");
					$(this).css("font-size","2.188rem");
					next();				
			});
			$("#namingcontent").delay(1500).fadeIn(2);
				
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
			  $("<i id='quote' > </i>").appendTo("#names1");
		   $("#quote").css({'position': 'absolute','bottom':'9%',
							'left':'28%','color':'white',
							'font-size':'1.25rem',
							'display':'none'});
		   $("#quote").html("\"Culture is something which defines us\"" );
		   $('#quote').delay(800).fadeIn(500);

		}
	
	});

	
	
	
});