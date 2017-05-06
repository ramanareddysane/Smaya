$(document).ready(function(){	
    $("#believe").click(function(){
		if($("#box").is(':visible')){
				$("#box").slideUp();
				$("#login").show("scale");							
		}
		
		if( special || !event.detail || event.detail==1){	
			// alert("special is " + special);
			special=0;
			$("#bckgrnd").fadeIn(500);
			$(this).hide();
			//big circle creation
			$("<div id='believe1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css( [ "width","height","position",
									"top","left",'background-image',
									"border-radius"] );  
			$("#believe1").css(styles);
			$("#believe1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
			$("<div class='temp' >  </div>").appendTo("#believe1"); 
			$(".temp").css({'believe1': '1.563rem' ,'height':'1.563rem',
							'position': 'absolute',
							'color':'white',	
							'top': '40%', 'left': '13%',
						});	
			$("<b id='head' > Believe Us </b>").appendTo(".temp");
			$("#head").css({'font-size':'1.25rem', "font-family": "'Salsa', cursive" });		 
		 
			//animations 
			$("#believe1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'3%',left:'40%',},700);
			$("#head").delay(1000).queue(function(next){
				$(this).css("font-size","1.875rem");
				next();
			});
			$("#believe1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem'},800);
			
			//close button 
			$("<div class='close' title='u can press esc too' > </div>").appendTo(".bigc").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;top:0rem;right:0rem' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
			
		
		// html for the content of the bubble; 
		  var content="  <div id='believeuscontent' class='contentc' style='color:white;font-size:19px;padding:0.3125rem;position:absolute;top:15%;'>" +
			"<div id='ul' style='line-height:1.6rem;width:78%;margin-left:15%;'>"+
			   "<b style='font-size:1.263rem;'>Believe us</b>, we know the pain of being stalked by someone.<br>"+
			   "<b style='font-size:1.263rem;' >Believe us</b>, we know what attacks you are prone to and how to prevent them<br>"+
			   "<b style='font-size:1.263rem;'>Believe us</b>, we may not know you in person, but your security matters to us more, may be more than you imagine.<br>"+
			"</div>"+	
			"<div align='middle'><h3 style='margin-top:8px'>You & Your security matters</h3></div>"+	
			"</div>";
			 $(content).appendTo("#believe1").hide().delay(1300).fadeIn(2);
			 
		//creating u and ur security buttons
		var youstyle ={color:'white','font-size':'26px',position:'absolute',top:'40%',left:'19%','font-weight':'bolder'};	
			 $('<div id="you"><a> You </a></div>').css(youstyle).appendTo("#believe1").css({'text-decoration':'underline','font-size':'30px'}).hide().delay(1300).fadeIn(2);
		var yourstyle ={color:'white','font-size':'18px',position:'absolute',top:'41%',left:'63%','font-weight':'bolder'};	
			$('<div id="your"><a>Your Security </a></div>').css(yourstyle).appendTo("#believe1").hide().delay(1300).fadeIn(2);
		
		var contentstyle={color:'white',position:'absolute',top:'46%',left:'10%',height:'30%',width:'80%',overflow:'auto','font-size':'19px'};
			
		
		var youcontent="<li>Your battery life matters to you. You matter to us, so your battery life matters to us too. Bluetooth drains battery "
							+"only if something is being transferred or received, not when simply switching ON. We assure you that. Sleep well, your"
							+" battery is great, only when you decrease your overall phone usage though.</li>"
							
							+"<li> Other person know when you are near if and only if you granted him permission to do so when accepting his/her requests"
							+" and we know you accept people only you know. </li>"		
							
							+"<li> You may switch off notifications any time in the day with just a tap of a button. Not only that we feel bad when we irritate you,"
							+" we try our best not to, we can go on fast to see you happy. WE care for you.</li>"
							
							+"<li> You can switch off connections with any one, anytime, we understand not everyone are made to stick together lifelong. "
							+"(But  please try to understand this fact, relations are important, think twice.) </li>";		
			
		var yourcontent="<li>We know there are some security issues regarding making Bluetooth discoverable. But let us assure you with today's "
							+"Bluetooth you need pairing to access information and high expertise of hacking to hack information. </li>"
	
							+"<li>We are not degrading hackers, they can hack anything. We are trying hard to prevent that. Your Bluetooth will "
							+"be switched off immediately if our app found out some unauthorised pairing. When you switch ON the internet we "
							+"will get the information about the pairing and we will make it secure further. Believe us, we will be striving "
							+"hard to secure your information. </li>"
							
							+"<li> Though we love hackers, we know all are not good ones, we'll be hiring the good ones to attack"
							+" the bad ones and our good ones are better. We assure your safety.</li>"
							
							+"<li> As time progresses we will be investing more on this and we will come up with more app security.</li>"
							
							+"<li> And as they say being on net means, you can be hacked, keeping your Bluetooth means you can be hacked,"
							+" it's just that how hard it is to hack. We will try our level best to make it harder. So sleep well,"
							+" you are safe.</li>";

		
		$('<div id="content"> </div>').css(contentstyle).html(youcontent).appendTo("#believe1").hide().delay(1300).fadeIn(2);
		$('<div><hr width="80%"></div>').css({position:'absolute',top:'85%',width:'99%'}).appendTo("#believeuscontent").hide().delay(1400).show(200);
		$('<div><hr size=30;></div>').css({position:'absolute',top:'39%',left:'50%',width:'1'}).appendTo("#believe1").hide().delay(1400).show(200);
		
	//Displaying specific category when clicked on it 
		$("#you").click(function(){
			$(this).animate({'font-size':'30px'}).css({'text-decoration':'underline'});
			$("#your").animate({'font-size':'18px'}).css({'text-decoration':'none'});
			$("#content").hide().html(youcontent).fadeIn().scrollTop(0);	
			$("li").css({'margin-bottom':'24px','line-height':'1.6rem'});
			
		});	
		
		$("#your").click(function(){
			$(this).animate({'font-size':'26px'}).css({'text-decoration':'underline'});
			$("#you").animate({'font-size':'22'}).css({'text-decoration':'none'});
			$("#content").hide().html(yourcontent).fadeIn().scrollTop(0);
			$("li").css({'margin-bottom':'24px','line-height':'1.6rem'});
		});	
		
		//setting up the scroll button	
			var scrollstyle = { height:'100px',width:'100px',position:'absolute',bottom:'9%',left:'39%',opacity:'0.5',cursor:'pointer'};			
			$('<div id="scroll" ></div>').css(scrollstyle).html('<img src="down.png" height="90" width="128" />').appendTo("#believe1").hide().delay(1300).fadeIn(2)	
			.hover(function(){
				$(this).animate({opacity:'1'},100);		
			},function(){
					$(this).animate({opacity:'0.4'},100);	
			});
			$("#scroll").click(function(){
				$("#content").animate({'scrollTop':'+=50'});
			});

		$("li").css({'margin-bottom':'24px','line-height':'1.6rem'});
		
		$("a").hover(function(){
					$(this).css("opacity","0.7");
				},function(){
					$(this).css("opacity","1");
				});	
			$("a").css("cursor","pointer");	
			
	//// customizing the acroll bar 
		$('<style>'
		+' #content::-webkit-scrollbar { width: 5px;}'
		+' #content::-webkit-scrollbar-thumb{background-color:#111 	} '
		+' #content::-webkit-scrollbar-thumb:hover{background-color:#fff } '
		+' '
		+'</style>').insertAfter('#content');			

	//quote at the bottom
			$("<i id='quote' > </i>").appendTo("#believe1");
			$("#quote").css({'position': 'absolute','bottom':'5%',
							'left':'26%','color':'white',
							'font-size':'1.063rem',
							'display':'none'});
			$("#quote").html("\"  Believing in someone who are so passionate of<br> &nbsp &nbsp &nbsp &nbspwhat they are doing, never let you down\"" );
			$('#quote').delay(800).fadeIn(500);
			
			//on clicking close button
			$(".close").click(function(){
				$("#content").remove();
				$("#you").remove();
				$("#your").remove();	
				var el = $.Event('keydown');
                el.which = 27; 
                $(document).trigger(el);	
			});	
	
		
	
	    }
	});	
});