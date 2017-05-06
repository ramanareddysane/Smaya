$(document).ready(function(){
	
	$("#nimi").click(function(){

		if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}

	
		if(!event.detail || event.detail==1){	
     		$("#bckgrnd").fadeIn(500);
	    	$(this).hide();
		
	    	//big circle creation
	    	$("<div id='nimi1' class='bigc'>  </div> ").appendTo("#bckgrnd");
		    var styles=$(this).css( [ "width","height","position",
								"top","left",'background-image',
								"border-radius"] );  
		    $("#nimi1").css(styles);
			$("#nimi1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
			$("<div class='temp'> </div>").appendTo("#nimi1"); 
			$(".temp").css({'position': 'absolute',
						'color':'white','top': '40%','left': '5%'});	
			$("<b id='head' > Nimi Band </b>").appendTo(".temp");
			$("#head").css({'font-size':'1.25rem', "font-family": "'Salsa', cursive" });		 
		 
			//animations 
			$("#nimi1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'3%',left:'35%'},700);
			$("#head").delay(510).animate({'font-size':'2.5rem'},700);
			$("#nimi1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem'},800);
		
			//close button 
			$("<div class='close' title='u can press esc too' > </div>").appendTo(".bigc").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;top:0rem;right:0rem' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
			
			//on clicking close button
				$(".close").click(function(){
					$("#ft").hide();
					$("#work").hide();
				var el = $.Event('keydown');
						el.which = 27; 
						$(document).trigger(el);	
				});
			
///////////  main content creation and adding features and how its 


	var contentstyles={width:"100%",height:"70%",color:"white",fontSize:"1.5rem",paddig:"0.3125rem",
							position:"absolute",top:"15%",};
			$("<div id='nimicontent' class='contentc'> </div> ").appendTo("#nimi1");				
			$(".contentc").css(contentstyles).hide().delay(1500).fadeIn(1);
	// intro container		
		var introstyles={'padding-left':"1.25rem"};
		$("<div class='nimiintro'> </div>").css(introstyles).appendTo("#nimicontent");
	// intro content 	
		$("<p></p>").css("text-indent","4.5rem").html('Nimi band is a social fitness wearable which increases <br> <span style="margin-left: 59px;"> Aapi world efficiency, hands free connection and helps</span><br><span style="margin-left: 45px;"> you stay fit.</span>').appendTo(".nimiintro");
		$("<p></p>").css("text-indent",'2.5rem').html('Nimi band is beautifully designed to meet everyone needs. The features it'+
											' carry as a social wearable, as a fitness tracker is amazing.').appendTo(".nimiintro");
  
  //features button
	   var ftstyles={background:"url('fs.png') no-repeat",width:"11.25rem",'background-position':"center",height:"5rem",
					  cursor:"pointer",'border-bottom':"0.4375rem solid silver",'border-radius':"50%",position:"absolute",left:"13%",top:"50%"};
		$("<div id='ft'></div>").css(ftstyles).appendTo("#nimi1").hide().delay(1234).fadeIn(3);      
  
  
  
				 
 // on clicking features button
  $("#ft").click(function(){
		
		// first create the back button and appen to bigc.
			$("<div class='back' > </div>").appendTo(".bigc")
            $(".back").html("<img  style='cursor:pointer;width:2.5rem;height:1.875rem; position:absolute;top:0.3125rem; right:3.125rem' src='bb.ico'>");
			$(".back").delay(1200).fadeIn(12);

		// performing necessary animations 	
			$(".nimiintro").fadeOut();
			$("#work").fadeOut();
			$(".temp").animate({top:'2%',left:'40%'},700);
			$("#head").animate({'font-size':'1.563rem'},700);
			$("#ft").animate({left:"35%",top:"4%"},700);
	
	//   declaring the main content of features 
	//   declaring the main content of features 
		var consstyle={'position':'absolute','font-size':'30px',top:'4%',left:'17%','text-decoration':'underline'};
		$('<div id="cons" class="con"> <a> Connections</a> </div>').css(consstyle).appendTo("#nimicontent").hide().delay(500).fadeIn(500);
		
		var fitstyle={'position':'absolute','font-size':'23px',top:'5%',left:'64%'};
		$('<div id="fit" class="con" > <a>Fitness</a></div>').css(fitstyle).appendTo("#nimicontent").hide().delay(500).fadeIn(500);
		
		$('<div class="con" ><hr size=30;></div>').css({position:'absolute',top:'3%',left:'50%',width:'1'}).appendTo("#nimicontent").hide().delay(500).fadeIn(500);
	  
	// for connection section	
		var conscontstyle={color:'white','font-size':'19px',position:'absolute',top:'20%',left:'3%','line-height':'1.8rem'};
		var consconthtml="<li style='margin-left:28px;' > Nimi band increases the range of offline connection. </li>"
		
						+"<li style='margin-left:10px;'>When connected to phone, Nimi band performs exact same work of Aapi world<br> "
						+" using Bluetooth of the band not the phone's, thus increasing the range of  offline <br>"
						+" <span style='margin-left:-1px'>connection.</span> </li>"
		
						+"<li style='margin-left:-4px;'>Nimi band, when connected to phone receive all the notifications from Aapi world. <br>"
						+" <span style='margin-left:8px'>It also receives other notifications like phone calls, messages, other social network<br></span> "
						+"<span style='margin-left:9px;'>notifications.</span> </li>"
						
						+"<li style='margin-left:10px;'>When not connected, it doesn't know whether you are using your phone or not,<br>"
						+"<span style='margin-left:18px'> so it assumes you are using and sends you a notification in all the cases. Yet </span><br>"
						+"<span style='margin-left:28px;'> you can switch off the notifications with a tap of a button. We never want to</span> <br>"
						+" <span style='margin-left:37px'>irritate you.</span> </li>";	
						
		$('<div id="concontent" class="con" > </div>').css(conscontstyle).html(consconthtml).appendTo("#nimicontent").hide().delay(500).fadeIn(500);
	 
	// for fitbess section
		var fitcontstyle={color:'white','font-size':'19px',position:'absolute',top:'20%',left:'3%','line-height':'1.8rem'};
		var fitconthtml="<li style='margin-left:28px;' > Nimi band is also a fitness tracker. It'll calculate your steps, your sleep etc.<br>"
						+"<span style='margin-left:15px'> So that you'll stay fit, sleep sound and stay happy.</li>"
						
						+"<li style='margin-left:1%;margin-top:3%;'> All the information regarding fitness tracker in the Nimi band will be released soon <br></li>"		
		$('<div id="fitcontent" class="con"> </div>').css(fitcontstyle).html(fitconthtml).appendTo("#nimicontent").hide();

		
	// On clicking the specific categories
		$("#fit").click(function(){
			$("#fit").animate({'font-size':'30px'},'fast',function(){
				$(this).css('text-decoration','underline');
			});
			$("#cons").animate({'font-size':'23px'},'fast',function(){
				$(this).css('text-decoration','none');
			});
			
			
			$("#concontent").fadeOut('fast',function(){
				$("#fitcontent").fadeIn('slow');
			});
		});
		
		$("#cons").click(function(){
			$("#cons").animate({'font-size':'30px'},'fast',function(){
				$(this).css('text-decoration','underline');
			});
			$("#fit").animate({'font-size':'23px'},'fast',function(){
				$(this).css('text-decoration','none');
			});
			
			$("#fitcontent").fadeOut('fast',function(){
				$("#concontent").fadeIn('slow');
			});
		});


	 
	 // setting effects for headings
			$("a").hover(function(){
					$(this).animate({'opacity':'0.4'},100);
			},function(){
					$(this).animate({'opacity':'1'},100);
			});
	      $("a").css("cursor","pointer");
	
	  // on cliking the back button 
		 $(".back").click(function(){
			$(".con").hide();
			$("#head").animate({'font-size':'2.5rem'},700);						
			$(".temp").animate({left:'35%',top:'3%'},700);
			$("#work").delay(500).fadeIn(200);
			$(".nimiintro").delay(700).fadeIn(12);
			$("#ft").animate({left:'13%',top:'50%'},700);
			$(this).remove();
		});
	});
		
	
	
	
	
	// work button
		var workstyles={background:'url("hiwr.png")',height:'80px',width:'260px',position:'absolute',cursor:"pointer",
					top:'66%',left:'46%','background-size':'340px','background-position':'2px -48px','border-radius':'50%',
					'border-bottom':'6px solid silver'};
			$("<div id='work'></div>").css(workstyles).appendTo("#nimi1").hide().delay(1234).fadeIn(3);
  // on clicking the  work button 
		$("#work").click(function(){
			  // first create the back button and appen to bigc.
				$("<div class='back' > </div>").appendTo(".bigc").hide();	
				$(".back").html("<img  style='cursor:pointer;width:2.5rem;height:1.875rem; position:absolute;top:0.3125rem; right:3.125rem' src='bb.ico'>");
				$(".back").delay(1200).fadeIn(12);	
			// performing the necessary animations
				$(".nimiintro").fadeOut();
				$("#ft").fadeOut();
			     $(".temp").animate({top:'2%',left:'40%'},700);
			    $("#head").animate({'font-size':'1.563rem'},700);
			    $(this).animate({left:"30%",top:"4%"},700);
			// creating workcontent and attach 				
				$('<div id="workcontent"></div>').appendTo("#nimicontent").hide();
				$("<img src='org.png'/>").css({position:'absolute',top:'-11%',left:'11%'}).appendTo("#workcontent");
			var subworkcontentstyle={position:'absolute',top:'53%',left:'5%',borer:'2px solid silver'};
			var subworkcontenthtml ='<h3>Connect it and Forget it:</h3> <p style="text-indent:50px;font-size:1.2rem;">'
			+'<span>Connect the band to the phone via Bluetooth. Follow the instructions <br></span>'
			+' <span style="margin-left:50px">in the app, boom! your band is all set to go.</p>';	
				$("<div id='subworkcontent'></div>").css(subworkcontentstyle).html(subworkcontenthtml).appendTo("#workcontent");			
			$("#workcontent").delay(700).fadeIn(21);
		// on cliking the back button 
			$(".back").click(function(){
				$("#workcontent").hide();
				$("#head").animate({'font-size':'2.5rem'},700);						
				$(".temp").animate({left:'35%',top:'3%'},700);
				$(".nimiintro").delay(600).fadeIn(1);
				$("#ft").delay(500).fadeIn(200);
				$("#work").animate({top:'66%',left:'46%',},700);
				$(this).remove();
			});
		});
 
  
		//quote at the bottom
			$("<i id='quote' > </i>").appendTo("#nimi1");
			$("#quote").css({'position': 'absolute','bottom':'4%',
						'left':'29%','color':'white',
						'font-size':'1.063rem',
						'display':'none'});
			$("#quote").html("\" Devices need to be an extension to yourself <br>"
					+' <span style="margin-left:2.813rem;" >not just pieces in your pocket\" </span>' );
			$('#quote').delay(800).fadeIn(500);
		 }
	});
	
	
	
});