var special;
$(document).ready(function(){	
	$("#aapi").click(function(){
		
		if($("#box").is(':visible'))
				{
					$("#box").slideUp();
					$("#login").show("scale");							
				}
		if(!event.detail || event.detail==1){	
			$("#bckgrnd").fadeIn(500);
			$(this).hide();
			
			//big circle creation
			$("<div id='aapi1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css( [ "width","height","position",
									"top","left",'background-image',
									"border-radius"] );  
			$("#aapi1").css(styles);
			$("#aapi1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
			$("<div class='temp' >  </div>").appendTo("#aapi1"); 
			$(".temp").css({'width': '1.563rem' ,'height':'1.563rem',
							'position': 'absolute',
							'color':'white',	
							'top': '19%', 'left': '23%',
						   });	
			 $("<b id='head' > Aapi </b>").appendTo(".temp");
			 $("<b id='head2' > World </b>").appendTo(".temp");
			 $("#head").css({'font-size':'2.5rem', "font-family": "'Salsa', cursive" });		 
			 $("#head2").css({'font-size':'2.5rem', "font-family": "'Salsa', cursive",'margin-left':'-18px' });		 
			 
			//animations 
			$("#aapi1").animate({top:'40%',left:'30%'},500);
			$(".temp").delay(510).animate({top:'3%',left:'43%'},700);
			$("#aapi1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem' },800);
		


	$("<div id='aapicontent' class='contentc'></div>").css('boder','2px solid silver').appendTo("#aapi1").hide().delay(1400).fadeIn(300);		


	var aapiintrosttles={color:'white','font-size':'20px','font-family':"'Goudy Old Style', Garamond, 'Big Caslon', 'Times New Roman', serif",
						position:'absolute',top:'23%',width:'100%','line-height':'2.25rem','font-size':'1.25rem'};
	var aapiintrohtml='<p style="text-indent:13%;">Aapi world is world\'s first app only social network which helps  <br>'
						+'<span style="margin-left:8%;">people maintain HUMAN INTERACTION in the real world and share their</span><br>'
						+'<span style="margin-left:7%;"> experiences, while learning from other\'s expriences online.Basically we </span><br>'
						+'<span style="margin-left:6%">connect people BOTH OFFLINE and ONLINE. </p>';
	$('<div id="aapiintro"></div>').css(aapiintrosttles).html(aapiintrohtml).appendTo("#aapicontent").hide().delay(1400).fadeIn(300);		
	
	$('<div id="feat"> </div>').addClass("btn").appendTo("#aapi1").hide().delay(1400).fadeIn(300);
	$('<div id="perm"> </div>').addClass("btn").appendTo("#aapi1").hide().delay(1400).fadeIn(300);
	
	
	$("#feat").css({"cursor":"pointer",'border-bottom':'5px solid silver',height:'60',width:'180px','border-radius':'40%','background-position':'center',	
					background:'url(feat.png) no-repeat',position:'absolute',top:'57%',left:'10%'});
	$("#perm").css({"cursor":"pointer",'border-bottom':'5px solid silver',height:'70px',width:'220px','border-radius':'50%',
					background:'url(perm.png) no-repeat','background-size':'200px','position':'absolute',top:'67%',left:'50%'});
	
	
///// ON CLICKING THE FEATURES BUTTON	
	$("#feat").click(function(){	
			$("#head2").fadeOut(123);
			$("#head").animate({'font-size':'1.75rem'},700);						
			$(".temp").animate({left:'46%',top:'-1%'},700);
			
			// displaying the back button at the top 
				$("<div class='back' > </div>").appendTo("#aapi1").hide();	
				$(".back").html("<img  style='cursor:pointer;width:2.5rem;height:1.875rem;position:absolute;top:0.3125rem; right:3.125rem' src='bb.ico'>");
				$(".back").delay(1200).fadeIn(12);	
	
		$(".featcontent").remove();
		var prevtop=$(this).css('top');
		var prevleft=$(this).css('left');
		$(this).animate({top:'3%',left:'38%'},700);
		$("#perm").fadeOut();
		$("#aapiintro").fadeOut();

			var featstyle={color:'white',position:'absolute',top:'15%',width:'100%',height:'100%'};	
			$('<div class="featcontent"></div>').css(featstyle).appendTo("#aapicontent").hide().delay(1700).show();
			$('<div id="offline" class="wob" > <a>Offline</a></div>').css({'font-size':'35px',cursor:'pointer',position:'absolute',top:'0%',left:'24%'}).appendTo(".featcontent").hide().delay(700).fadeIn(0);
			$('<div id="online"  class="wob" > <a>Online</a> </div>').css({'font-size':'26px',cursor:'pointer',position:'absolute',top:'0%',left:'64%'}).appendTo(".featcontent").hide().delay(700).fadeIn(0);
			$('<div><hr width="80%"></div>').css({position:'absolute',top:'4%',width:'99%'}).appendTo(".featcontent").hide().delay(400).show(200);
			$('<div><hr size=30;></div>').css({position:'absolute',top:'-1%',left:'50%',width:'1'}).appendTo(".featcontent").hide().delay(400).show(200);	
	// indicating which one is active;
		var activemain={'font-weight':'large','font-size':'30',}
		var normalmain={'font-weight':'initial','font-size':'26',}
			
	// creating the content for all  paragraphs in WITHOUT BAND section
		var totalcontentstyle={width:'87%','font-family':'""Lucida Sans Unicode", "Lucida Grande", sans-serif','font-size':'105%',height:'45%',overflow:'auto',
											position:'absolute',top:'12%',left:'6%',boder:'2px solid silver',padding:'5px'};		
		var offcontent='<li style="margin-bottom:24px;line-height:1.6rem;">When you install Aapi world, it asks for a permission to switch on Bluetooth and make it discoverable. Aapi world solely'
							+' depends on Bluetooth for connecting people offline.</li>'
							
							+'<li style=margin-bottom:24px;line-height:1.6rem;">You can send two types of requests to every Aapi world user,<br>'
							+'<ul style="text-align:left;list-style-type:devanagari;margin:10px">'
							+'<li>Real Aapi request</li>'
							+'<li>Aapi request</li> </ul> </li>'
							
							+'<li style="margin-bottom:24px;line-height:1.6rem;" >Choose people whom you consider close and add them into your Real Aapi list by sending Real Aapi request. Real Aapi list is a list '
							+' of close people whose presence you want to be notified and when being with whom you want to get notifications when fixed to the phone.</li>'
							
							+'<li style="margin-bottom:24px;line-height:1.6rem;" >  Aapi list is a list of online friends whom you add by sending Aapi request. </li>'
							
							+'<li style="margin-bottom:24px;line-height:1.6rem;" >Real Aapi list is a list confined to 20 people. You can set priority, drag and drop '
							+'people from Aapi list, though you need a special permission from the user. </li>'
							
							+'<li style="margin-bottom:24px;line-height:1.6rem;" > Get notified when people in your Real Aapi list comes near to you, so that'
							+' you don\'t miss any chance to meet people close to you in real world. </li>'
							
							+'<li style="margin-bottom:24px;line-height:1.6rem;">Get notified when you are involved in your smartphone to smile at a stranger'
							+' when he/she having the app comes and stand beside you (very close).'
							+' Building humanity together. If you have just a while back, smiled at a stranger,' 	
							+' no notification will  come to smile at another for 10 minutes even though lot of'
							+' strangers pass by you. </li>'
							
							+'<li style="margin-bottom:24px;line-height:1.6rem;">Get notified while you are using your phone when you are with someone you love.'
							+'Aapi world knows, when the person is too close and when he/she is far away with the help '
							+'of Bluetooth range. If it recognises you are too close to that person, assuming that without'
							+' talking to him/her, you are fixed to your phone, you\'ll get notified. Incase if you are not using'
							+' your phone or your friend is just in range but not too close you\'ll not be notified as it assumes'
							+' either you are enjoying with that person without using your phone or the person is not near and you'
							+'are alone, it never irritates you.</li>'
							
							+'<li style="margin-bottom:24px;line-height:1.6rem;"> All your meetings are stored in your offline tag, so that you can share your experience online. </li>';
		 
		var oncontent ='<li style="margin-bottom:24px;line-height:1.6rem;"> Aapi world uses Internet for ONLINE connections. </li>'

		             +'<li style="margin-bottom:24px;line-height:1.6rem;">Aapi world is a world of Aapis (your friends) with whom you share expriences in the form of photos,'
						+'videos, statuses etc. It is a world of people from different parts of the real world who share different' 
						+'types of experiences to the community, which helps other people of the community to evolve. </li>'

						 +'<li style="margin-bottom:24px;line-height:1.6rem;"> Aapi world contains Aapi clubs, which are based on an interest, a passion or an organisation,' 
						+'company etc., which you follow, where you can learn and evolve</li>'
						
                  		 +'<li style="margin-bottom:24px;line-height:1.6rem;"> Users tag their experiences to the Aapi clubs. Based on the upvotes and downvotes,'
						 +' some exeriences will top the club and they 	appear on the feed of users who followed those clubs. Generally the most liked one is a '
						 +'great post. They can be shared into your wall. Thus learning and evolving, sticking to our vision of seeing people '
						 +'connect with more genius people around the world and evolve. </li>'
						 
						 +'<li style="margin-bottom:24px;line-height:1.6rem;">  Community experience sharing, differentiating the wall so that you can get direct access'
						 +' to your friends posts or some great shared posts by your friends, not any bullshit are some features.  </li>'
						
						+'<li style="margin-bottom:24px;line-height:1.6rem;">These are some important features and there\'s lot more on the release day. Stay tuned and keep loving.'
						+'When we release you\'ll definitely be amazed, we assure. </li>';
			
		// setting the default content
			$('<div id="totalcontent" class="wob" > </div>').css(totalcontentstyle).html(offcontent).appendTo(".featcontent").hide().delay(500).fadeIn(400);	
	     
		 //setting up the scroll button	
			var scrollstyle = { height:'100px',width:'100px',position:'absolute',top:'60%',left:'39%',opacity:'0.5',cursor:'pointer'};			
			$('<div id="scroll" class="wob" ></div>').css(scrollstyle).html('<img src="down.png" height="90" width="128" />').appendTo(".featcontent").hide().delay(500).fadeIn(400)	
			.hover(function(){
				$(this).animate({opacity:'1'},100);		
			},function(){
					$(this).animate({opacity:'0.4'},100);	
			});
			$("#scroll").click(function(){
				$("#totalcontent").animate({'scrollTop':'+=80'});
			});

		// changing content on click 	
			$("#offline").click(function(){
				$(this).animate({'font-size':'35'},200);
				$(this).css({'font-weight':'large'});
				$("#online").animate({'font-size':'22'},200);	
				$("#online").css({"text-decoration":"none",'font-weight':'normal'});
				$("#totalcontent").html(offcontent).hide().fadeIn(300);
				$('#totalcontent').scrollTop(0);
					
			});	
			$("#online").click(function(){
				$(this).animate({'font-size':'35'},200);
				$(this).css({'font-weight':'large'});
				$("#offline").animate({'font-size':'22'},200);		
				$("#offline").css({"text-decoration":"none",'font-weight':'normal'});
				$("#totalcontent").html({'font-size':'22'}).hide().fadeIn(300);
				$('#totalcontent').scrollTop(0);
				$("#totalcontent").html(oncontent).hide().fadeIn(300);

			});	
	
		$("li").css({'margin-bottom':'24px','line-height':'1.6rem'});
	//// customizing the acroll bar 

		$('<style> '
		+' #totalcontent::-webkit-scrollbar { width: 5px;}'
		+' #totalcontent::-webkit-scrollbar-thumb{background-color:#111 	} '
		+' #totalcontent::-webkit-scrollbar-thumb:hover{background-color:#fff } '
		+'</style>').insertAfter('#totalcontent');
				
	$("a").hover(function(){
			$(this).css("opacity","0.7");
		},function(){
			$(this).css("opacity","1");
		});	
	$("a").css("cursor","pointer");		
			
	$("li").css({'margin-bottom':'24px','line-height':'1.6rem'});
	
	// on pressing the back button
			$('.back').click(function(){
				$(this).remove();
				$(".featcontent").remove();
				$("#feat").finish().animate({top:prevtop,left:prevleft},500);
				$("#aapiintro").finish().delay(400).fadeIn(700);
				$("#perm").finish().delay(200).fadeIn(723);
				$("#head").finish().animate({'font-size':'2.5rem'},700);						
			  $(".temp").finish().animate({left:'43%',top:'3%'},700);
			  $("#head2").delay(200).fadeIn(700);
				
			});
	});	

//on clicking the permissions buton 
		
	$("#perm").click(function(){
			$("#head").animate({'font-size':'1.75rem'},700);						
			$(".temp").animate({left:'46%',top:'-1%'},700);
			$("#head2").fadeOut(123);
		$("#permcontent").remove();
	// displaying the back button at the top
				$("<div class='back' > </div>").appendTo("#aapi1").hide();	
				$(".back").html("<img  style='cursor:pointer;width:2.5rem;height:1.875rem;position:absolute;top:0.3125rem; right:3.125rem' src='bb.ico'>");
				$(".back").delay(1200).fadeIn(12);	
	
   // preliminary animations	
		$("#feat").fadeOut(734);
		$("#aapiintro").fadeOut(734);
		var prevtop=$(this).css('top');
		var prevleft=$(this).css('left');
		$(this).animate({top:'3%',left:'38%'},700);
	
	// creating and adding hte content; 	
		var permcontentstyle={color:'white',position:'absolute',top:'22%',width:'100%',
						       'font-size':'1.23rem'};
		
		var permcont="<li style='margin-left:68px;'> For offline connections we don't use internet, we use your Bluetooth,<br>"
					+"thus saving you some money and making it lot easier to connect.</li>"
					
					+"<li style='margin-left:42px;'> So we need your Bluetooth to be switched ON and made discoverable.</li>"
					
					+"<li style='margin-left:32px;'> We know you are afraid of battery issues and security issues caused by this.<br>"
					+" We assure you most part of that is just a myth.</li>"
					
					+"<li style='margin-left:25px;'> Bluetooth causes battery drain only if something is being transferred or received "
					+"not when  your phone\'s Bluetooth is switched ON. Yes there'll be a fraction of battery loss, but it's "
					+"negligible enough to ignore as we know it doesn't affect you much as it is very less compared to"
					+" battery loss when data connection is switched on and when WiFi connected to a network. </li>"
					
					+"<li style='margin-left:40px;'>Regarding security issues, yes Bluetooth has some loop holes. We are trying <br>"
					+"<span style='margin-left:10px;' >hard and we will be trying hard to protect you from any such attacks. Check </span> <br>"
					+"<span style='margin-left:15px'> our <a id='bssection' style='cursor:pointer;color: gold;text-decoration: underline;'>Believe Us</a> section to know how we are tackling this issue.</span> </li>"
					+" <script>"
					+"$('#bssection').click(function(){"
					+"$('.close').click();"
					+"});"
					+"</script>";
		$('<div id="permcontent"></div>').css(permcontentstyle).html(permcont).appendTo('#aapi1').hide().delay(600).fadeIn(400);
		
		// on pressing ht eback button
			$('.back').click(function(){
				$(this).remove();
				$("#permcontent").fadeOut(430);
				$("#perm").animate({top:prevtop,left:prevleft},800);
				$("#aapiintro").delay(400).fadeIn(700);
				$("#feat").delay(200).fadeIn(723);			
				$("#head").animate({'font-size':'2.5rem'},700);						
			  $(".temp").animate({left:'43%',top:'3%'},700);
  			  $("#head2").delay(200).fadeIn(700);
								
			});
			$("li").css({'margin-bottom':'10px','line-height':'1.7rem',});
	});	
		
			//close button 
			$("<div class='close' title='u can press esc too' > </div>").appendTo(".bigc").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;top:0rem;right:0rem' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
					
			//quote at the bottom
			  $("<i id='quote' > </i>").appendTo("#aapi1");
		   $("#quote").css({'position': 'absolute','bottom':'8%',
							'left':'26%','color':'white',
							'font-size':'1.063rem',
							'display':'none'});
		   $("#quote").html('\"Human interaction is the most under rated thing <br> '
		   +'<span style="margin-left:35%;"> now a days\"' );
		   $('#quote').delay(800).fadeIn(500);
	
			//on clicking close button
			$(".close").click(function(){
					$("#feat").hide();
					$("#perm").hide();
					special=1;
					// $('#believe').click();
				var el = $.Event('keydown');
                el.which = 27; 
                $(document).trigger(el);				
			});
	
		}
	
	});
	
		
});