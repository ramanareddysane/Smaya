$(document).ready(function(){
    $("#team").click(function(){
		
			if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}
		if(!event.detail || event.detail==1){	

			$("#bckgrnd").fadeIn(500);
			$(this).hide();
			
			//big circle creation
			$("<div id='team1' class='bigc'>  </div> ").appendTo("#bckgrnd");
			var styles=$(this).css(["width","height","position",
									"top","left",'background-image',
									"border-radius"]);  
			$("#team1").css(styles);
			$("#team1").css("box-shadow","0rem 0rem 0.625rem black");

			//heading creation
				$("<div class='temp' >  </div>").appendTo("#team1"); 
				$(".temp").css({'team1': '1.563rem' ,'height':'1.563rem',
								'position': 'absolute',
								'color':'white',	
								'top': '40%', 'left': '20%',
							});	
				$("<b id='head' > Team </b>").appendTo(".temp");
				$("#head").css({'font-size':'1.688rem', "font-family": "'Salsa', cursive" });		 
		 
			//animations 
				$("#team1").animate({top:'40%',left:'30%'},500);
				$(".temp").delay(510).animate({top:'3%',left:'43%'},700);
				$("#team1").animate({ top:'10%',left:'22%',width:'43.75rem',height:'43.75rem' },800);
				$("#head").delay(1200).queue(function(next){
						$(this).css("font-size","2.188rem");
						next();	
			});
			
			/// creating and appending contentc class container to root element 
	$("<div id='teamcontent' class='contentc'></div>").css('boder','2px solid silver').appendTo("#team1").hide().delay(700).fadeIn();		

// code for creating hte team introduction and append to contentc element 
	var teamintrostyle={'font-size':'1.12rem','line-height':'1.6rem',color:'white'};
	var teamintrohtml='<p style="margin-top:14%;text-indent:21%"> We do it because we love it. We believe in what we do. We <br>'
			+'<span style="margin-left:17%;">really, really, want this world to be a better place to live in. We are</span><br> '
			+'<span style="margin-left:14%;">striving hard for that to happen. We will be keep striving hard day and </span><br> '
			+'<span style="margin-left:10%;">night. Meet the team who is keeping the energy alive, vision intact and striving</span><br>'
			+'<span style="margin-left:8%;"> hard.</p>'
	$('<div id="teamintro"> </div>').css(teamintrostyle).html(teamintrohtml).appendTo("#teamcontent");		

////  data for individual team members
		
		var vimalstyle={width:'130px',height:'auto',backround:'#343','text-align':'center',color:'white',position:'absolute',top:'34%',left:'14%'};
		var vimalhtml='<img src="1vimmu.jpg" style="width:100px;height:100px;border-radius:50%;">'
						+' <div class="name"> Vimal </div>'
						+' <div class="designation" >CEO & Product Architect </div>';				
      $('<div class="member" id="vimal" ></div>').css(vimalstyle).html(vimalhtml).appendTo("#teamcontent");
		
		
		var abhstyle={width:'130px',height:'auto',backgrond:'#343','text-align':'center',color:'white',position:'absolute',top:'34%',left:'42%'};
		var abhhtml='<img src="2abhi.jpg" style="width:100px;height:100px;border-radius:50%;">'
						+' <div class="name"> Abhijith </div>'
						+' <div class="designation" > COO </div>';
     $('<div class="member" id="abh" ></div>').css(abhstyle).html(abhhtml).appendTo("#teamcontent");
	 
	 	var rmnstyle={width:'150px',height:'auto',backgrond:'#343','text-align':'center',color:'white',position:'absolute',top:'33%',left:'68%'};
		var rmnhtml='<img src="3rama.jpg" style="width:100px;height:100px;border-radius:50%;">'
						+' <div class="name"> Ramana </div>'
						+' <div class="designation" > Chief Developer (Web) </div>';
     $('<div class="member" id="rmn" ></div>').css(rmnstyle).html(rmnhtml).appendTo("#teamcontent");
		
 	var jesstyle={width:'130px',height:'auto',backgrond:'#343','text-align':'center',color:'white',position:'absolute',top:'59%',left:'18%'};
		var jeshtml='<img src="4jas.jpg" style="width:100px;height:100px;border-radius:50%;">'
						+' <div class="name"> Jaswanth </div>'
						+' <div class="designation" > Design Scientist (Hardware & Software UX) </div>';
     $('<div class="member" id="jes" ></div>').css(jesstyle).html(jeshtml).appendTo("#teamcontent");
		
		var chnstyle={width:'130px',height:'auto',backgrond:'#343','text-align':'center',color:'white',position:'absolute',top:'59%',left:'43%'};
		var chnhtml='<img src="5chan.jpg" style="width:100px;height:100px;border-radius:50%;">'
						+' <div class="name"> Chandana </div>'
						+' <div class="designation" > Design Scientist (Hardware) </div>';
     $('<div class="member" id="chn" ></div>').css(chnstyle).html(chnhtml).appendTo("#teamcontent");
		
		var vanstyle={width:'130px',height:'auto',backgrond:'#343','text-align':'center',color:'white',position:'absolute',top:'59%',left:'67%'};
		var vanhtml='<img src="6vand.jpg" style="width:100px;height:100px;border-radius:50%;">'
						+' <div class="name"> Vandana </div>'
						+' <div class="designation" > Hardware Design Chief </div>';
     $('<div class="member" id="van" ></div>').css(vanstyle).html(vanhtml).appendTo("#teamcontent");
		

 	$(".designation").css({'font-size':'1.23rem'});	
	$(".member").css({cursor:'pointer'}).hover(function(){
		$(this).children().not("img").css("opacity","0.6");
	},function(){
				$(this).children().not("img").css("opacity","1");
	});
	
	
	var vimalinfo='<p style="text-indent:12%">A visionary who sees the world in a completely different way. Always <br>'
			+'<span style="margin-left:6%;">talking about changing the world and making it better. An avid reader, he  </span><br>'
			+'<span style="margin-left:5%">can be found with a book or with a friend almost everytime. Believes that  </span><br>'
			+'<span style="margin-left:4%">everyone is great, every person has a passion, if everyone works on their passion,</span> <br>'
			+'<span style="margin-left:5%">world will be a better place. Discussions with him feels out of the world. The </span><br>'
			+'<span style="margin-left:6%;">way he explains something leaves you mesmerised. A poet, ameature guitarist,</span><br>'
			+' <span style="margin-left:7%;">writer, director, what not. Show him that you have passion for something, </span><br>'
			+'<span style="margin-left:10%"> you\'ll never go empty-headed. \'He\' and \'passion\', a never ending love </span><br>'
			+'<span style="margin-left:13%">story. </span></p>';

	var abhinfo='<p style="text-indent:9%">Passionate people are hard to find, passionate hardworkers are harder.<br>'
			+'<span style="margin-left:6%;"> He is such. Keeps interest on lots of things, even black magic, yes you heard </span><br>'
			+'<span style="margin-left:5%"> that right. He is kinda weird. That\'s what makes him special. Eager to learn,</span><br>'
			+'<span style="margin-left:6%;"> happy to fail is his way of life. Guide him, inspire him, make him learn, leave</span><br>'
			+'<span style="margin-left:7%">him, he\'ll get you the moon. Movie lover, writes, reads, keep that list open,</span><br>' 
			+'<span style="margin-left:8%">there\'s more. Person to love, a friend to revere.</span> </p>';
	
	var raminfo='<p style="text-indent:11%;" >Geeks are lot easier to find now a days. Hardworking geeks are the<br>'
			+'<span style="margin-left:6%">hardest. He has his own definition of hardworking. Give him a task, he\'ll</span><br>'
			+'<span style="margin-left:5%;" >give his life on that. Obsession is his hallmark. Loves to talk, stands on</span><br>'
			+'<span style="margin-left:5%">some values. Hacker by heart. Programming is what all he loves. Other interests</span><br>'
			+'<span style="margin-left:5%;">include movies. He\'ll explain the plot with all the excitement of the world.</span><br>'
			+'<span style="margin-left:6%;"> Wanna excite him? Show him the easy way of programming anything or some </span><br>'
			+'<span style="margin-left:7%;">random english movie, as simple as that.</span></p>';
	
		
   var vaninfo='<p style="text-indent:8%;">Knowledge and passion, an impeccable combination. She is one of those <br>'
			+'<span style="margin-left:5%;">rare species. Designing is her way of life. An avid reader, a science lover and a</span><br>'
			+'<span style="margin-left:4%" >constant learner. Movies is the term which will make her forget the food. Talk to<br></span>'
			+'<span style="margin-left:4%;"> her about movies, she can talk for hours. Got a problem? Dial her, she\'ll give you</span><br>'
			+'<span style="margin-left:5%;"> a solution you will fall in love with. She knows a lot of things, which makes </span><br>'
			+'<span style="margin-left:6%;"> her a perfect suite for a conversation. Talk to her about anything, anytime,</span><br>'+
			'<span style="margin-left:7%;"> you\'ll never get bored.</span </p>';
	
	var jesinfo='<p style="text-indent:14%">Talk to him for 15 minutes, if that topic is something he loves, he\'ll </span></br>'
					+'<span style="margin-left:7%;">show you what he is capable of. An avid reader of a lot of books, a science</span><br>'
					+'<span style="margin-left:6%;">lover. If you have any topic you love to discuss, sit with him, offer a coffee, </span><br>'
					+' <span style="margin-left:6%">he\'ll talk, endlessly talk, he\'ll never get bored and you too. A writer, director,</span> <br>'
					+'<span style="margin-left:7%;">hacker, designer, whatever, understanding him is difficult, but definitely </span><br>'
					+'<span style="margin-left:8%;">worth a try because he\'ll get into your head</span></p>';
	
	var chninfo="<p style='text-indent:11%	;'>A problem solver you will admire. Give her a problem, she'll get you a </span><br>"
					+" <span style='margin-left:5%' > solution. She looks innocent but people who are close to her know how wrong </span><br>"
					+"<span style='margin-left:4%;'>it is. Reads a lot of history and geography in her free time. Innovator by heart.</span><br>"
					+"<span style='margin-left:5%;' >Innovates in a way that mesmerises you. Undoubtedly all the pranks in the</span><br>"
					+"<span style='margin-left:6%;'>team goes on her. Give her a chance to explain a topic and you'll never regret.";
	
	var chrninfo="<p style='text-indent:10%;' >Hacker by all means. Give him a laptop, he'll show you how to use it<br>"
					+"<span style='margin-left:8%' >  the hacker way. Learner of new things. At the first glance you assume he is</span><br>"
					+"<span style='margin-left:7%' >a bit shy, in the process of understanding him, you know he carries a story</span> <br>"
					+"<span style='margin-left:8%;'> inside.</span> </p>";

	
	
//// on clicking the individual ream member
		$(".member").click(function(){
					
					$(this).addClass('active').children().css('opacity','1');
					var atop=$(this).css("top");
					var aleft=$(this).css("left");
			var id=$(this).attr("id");
				$(this).siblings().fadeOut();
				$(this).animate({top:'7%',left:'41%','font-size':'140%'},700);
				$("#head").animate({'font-size':'1.875rem'},700);						
				$(".temp").animate({left:'45%',top:'1%'},700);
			
			// displaying the back button at the top 
				$("<div class='back' > </div>").appendTo("#team1").hide();	
				$(".back").html("<img  style='cursor:pointer;width:2.5rem;height:1.875rem;position:absolute;top:0.3125rem; right:3.125rem' src='bb.ico'>");
				$(".back").delay(1200).fadeIn(12);			
			
			//	display the member info
				var meminfo='';
				switch(id){
					case "vimal":	meminfo=vimalinfo;
										break;		
					case "van":		meminfo=vaninfo;
										break;		
					case "abh":		meminfo=abhinfo;
										break;		
					case "rmn":		meminfo=raminfo;
										break;		
					case "jes":		meminfo=jesinfo;
										break;		
					case "chn":		meminfo=chninfo;
										break;		
					case "chrn":		meminfo=chrninfo;
										break;			
				}
				var meminfostyle={color:'white','font-size':'1.25rem',width:'100%','line-height':'30px',
								'font-family':"'Goudy Old Style', Garamond, 'Big Caslon', 'Times New Roman', serif",position:'absolute',top:'34%'};
				$('<div class="meminfo"> </div>').css(meminfostyle).html(meminfo).appendTo("#team1").hide().delay(900).fadeIn();

			// whe back button was pressed
				$(".back").click(function(){
					// getting the id of the cllicked active member element
					$(".meminfo").fadeOut();
					$(".active").animate({top:atop,left:aleft,'font-size':'100%'},500,function(){ $(this).removeClass("active");});
					$("#head").animate({'font-size':'2.188rem'},700);						
				    $(".temp").animate({left:'43%',top:'3%'},700);
					$(".member").delay(200).fadeIn(400);
					$("#teamintro").delay(100).fadeIn(200);
					$(this).remove();			
				});	
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
				$("<i id='quote' > </i>").appendTo("#team1");
				$("#quote").css({'position': 'absolute','bottom':'4%',
								'left':'27%','color':'white',
								'font-size':'0.935rem',
								'display':'none'});
				$("#quote").html("\" Some people are driven by a passion, strive for  a <br>  "
				+' &nbsp &nbsp &nbsp &nbsp  similar vision and live by values. We call<br>'
				+' &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  them Smayans\".' );
				$('#quote').delay(800).fadeIn(500);

	    }
	});
	
		
});