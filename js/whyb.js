$(document).ready(function(){

	  
	  $("#why").click(function(){
	  		if(!event.detail || event.detail==1){		  
	  
				$(this).fadeOut();
				 $("#bckgrnd").fadeIn(500);
					  
				//big circle creation
				 $("<div id='why1' class='bigc'>  </div> ").appendTo("#bckgrnd");
				var styles=$(this).css( [ "width","height","position","top",
											"left","backgroundColor"
											,"border-radius"] );  
				$("#why1").css(styles);
				$("#why1").css("box-shadow","0px 0px 10px black");
						
				// heading creation
				$("<div class='temp' >  </div>").appendTo("#why1"); 
				$(".temp").css({'width': '25px' ,'height':'25px',
									'position': 'absolute',
									'color':'white',	
									'top': '10%', 'left': '30%',
								   });	
				$("<b id='head' > Why </b>").appendTo(".temp");
				$("#head").css({'font-size':'30px', "font-family": "'Salsa', cursive" });		 
					
				// animations
				$("#why1").animate({top:'40%',left:'30%'},500);
				$(".temp").delay(510).animate({top:'3%',left:'43%'},700);
				$("#why1").animate({top:'10%',left:'22%',width:'700px',height:'700px'},800);
				 
				//increase the size of the headinng	  
			    $("#head").delay(1200).queue(function(next){
					$(this).css("font-size","50px");
					next();					
				});
				// quote at the bottom
				$("<i id='quote' > </i>").appendTo("#why1");
				$("#quote").css({'position': 'absolute','bottom':'5%',
									'left':'26%','color':'white',
									'font-size':'20px',
									'display':'none'});
				$("#quote").html("\" We are here to gift people RELATIONS <br>	"
					+' &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp&nbsp&nbsp  &nbsp &nbsp &nbsp not just devices\"' );
				$('#quote').delay(800).fadeIn(500);

				// creating middle content
				$("<div id='whycontent' class='contentc' style='width:700px;height:440px;color:white;opacity:1;font-size:20px;background:geen;padding:5px;position:absolute;top:19%;''>"
					+" <p align='justify'>"
					+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp We believe everyone are driven by something. We too are driven by <br>"
					+" &nbsp &nbsp &nbsp &nbsp &nbsp this passion of connecting people equally in real and virtual worlds.</p>"
					+" <p align='justify'> &nbsp &nbsp &nbsp &nbsp  We believe you just have to know your 'WHY?', then everything will fall into <br>"
					+"  &nbsp &nbsp place, just everything.This is our Why? Why we wake up everyday excited about <br>"
					+"&nbsp  doing something? Why we are crazy to make this world a better place to live in? </p> <br>"
					
					+" <div class='cont' align='justify' style='width:700;height:115px;background-color:gren;padding:5px;' >"
					+" <div align='center' style='float:left;height:40%;font-size:30px;width:24%;background-color:#28367'>"
					+" <div style='float:left;' ><img src='vision.jpg'  style='border-radius:50%;height:40px;width:40px;'></div>"
					+" 	<div style='float:left;padding-top:5px;padding-left:3px;'><b style=''>Vision</b>:</div>"
					+"</div> "
					+"  To see more and more connected people in the REAL WORLD,<br>"
					+"  the &nbspworld as well as to see &nbspconnected devices &nbsprather than any <br> &nbsp &nbsp   other devices is  our vision."
					+"</div> "
					
					+" <div class='cont' align='justify'  style='width:650;height:120px;background-color:reen;margin-left:5%;' >"
					+" <div align='center' style='float:left;height:36%;font-size:30px;width:27%;backgroud-color:#258367'>"
					+"   <div style='float:left;' ><img src='mission.jpg'  style='border-radius:50%;height:40px;width:40px;'></div>"
					+"   <div style='float:left;padding-top:5px;padding-left:5px;'><b style=''>Mission</b>:</div>"
					+" </div>"
					+" Building &nbsp Relations &nbspthrough &nbspTechnology &nbspis &nbspour &nbsp aim. <br>"
					+" Gifting &nbsppeople &nbsp relations&nbsp &nbspand &nbsp making &nbsp them &nbsp better,<br>"
					+" &nbsp &nbsp &nbsp  making &nbsphumans &nbspexist&nbsp and making them evolve is what drives us crazy.<br>"
					+" &nbsp &nbsp &nbsp &nbsp That's our passion, our mission, our oxygen."
					+" </div> "
					
				  +"</div>")
				  .hide()
				 .appendTo("#why1");
				 
				  // animating the content
				$("#whycontent").delay(1500).fadeIn();	

			}	
	});	 
	 
 
	
});$(document).ready(function(){

	  
	  $("#why").click(function(){
	  		if(!event.detail || event.detail==1){		  
	  
				$(this).fadeOut();
				 $("#bckgrnd").fadeIn(500);
					  
				//big circle creation
				 $("<div id='why1' class='bigc'>  </div> ").appendTo("#bckgrnd");
				var styles=$(this).css( [ "width","height","position","top",
											"left","backgroundColor"
											,"border-radius"] );  
				$("#why1").css(styles);
				$("#why1").css("box-shadow","0px 0px 10px black");
						
				// heading creation
				$("<div class='temp' >  </div>").appendTo("#why1"); 
				$(".temp").css({'width': '25px' ,'height':'25px',
									'position': 'absolute',
									'color':'white',	
									'top': '10%', 'left': '30%',
								   });	
				$("<b id='head' > Why </b>").appendTo(".temp");
				$("#head").css({'font-size':'30px', "font-family": "'Salsa', cursive" });		 
					
				// animations
				$("#why1").animate({top:'40%',left:'30%'},500);
				$(".temp").delay(510).animate({top:'3%',left:'43%'},700);
				$("#why1").animate({top:'10%',left:'22%',width:'700px',height:'700px'},800);
				 
				//increase the size of the headinng	  
			    $("#head").delay(1200).queue(function(next){
					$(this).css("font-size","50px");
					next();					
				});
				// quote at the bottom
				$("<i id='quote' > </i>").appendTo("#why1");
				$("#quote").css({'position': 'absolute','bottom':'5%',
									'left':'26%','color':'white',
									'font-size':'20px',
									'display':'none'});
				$("#quote").html("\" We are here to gift people RELATIONS <br>	"
					+' &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp&nbsp&nbsp  &nbsp &nbsp &nbsp not just devices\"' );
				$('#quote').delay(800).fadeIn(500);

				// creating middle content
				$("<div id='whycontent' class='contentc' style='width:700px;height:440px;color:white;opacity:1;font-size:20px;background:geen;padding:5px;position:absolute;top:19%;''>"
					+" <p align='justify'>"
					+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp We believe everyone are driven by something. We too are driven by <br>"
					+" &nbsp &nbsp &nbsp &nbsp &nbsp this passion of connecting people equally in real and virtual worlds.</p>"
					+" <p align='justify'> &nbsp &nbsp &nbsp &nbsp  We believe you just have to know your 'WHY?', then everything will fall into <br>"
					+"  &nbsp &nbsp place, just everything.This is our Why? Why we wake up everyday excited about <br>"
					+"&nbsp  doing something? Why we are crazy to make this world a better place to live in? </p> <br>"
					
					+" <div class='cont' align='justify' style='width:700;height:115px;background-color:gren;padding:5px;' >"
					+" <div align='center' style='float:left;height:40%;font-size:30px;width:24%;background-color:#28367'>"
					+" <div style='float:left;' ><img src='vision.jpg'  style='border-radius:50%;height:40px;width:40px;'></div>"
					+" 	<div style='float:left;padding-top:5px;padding-left:3px;'><b style=''>Vision</b>:</div>"
					+"</div> "
					+"  To see more and more connected people in the REAL WORLD,<br>"
					+"  the &nbspworld as well as to see &nbspconnected devices &nbsprather than any <br> &nbsp &nbsp   other devices is  our vision."
					+"</div> "
					
					+" <div class='cont' align='justify'  style='width:650;height:120px;background-color:reen;margin-left:5%;' >"
					+" <div align='center' style='float:left;height:36%;font-size:30px;width:27%;backgroud-color:#258367'>"
					+"   <div style='float:left;' ><img src='mission.jpg'  style='border-radius:50%;height:40px;width:40px;'></div>"
					+"   <div style='float:left;padding-top:5px;padding-left:5px;'><b style=''>Mission</b>:</div>"
					+" </div>"
					+" Building &nbsp Relations &nbspthrough &nbspTechnology &nbspis &nbspour &nbsp aim. <br>"
					+" Gifting &nbsppeople &nbsp relations&nbsp &nbspand &nbsp making &nbsp them &nbsp better,<br>"
					+" &nbsp &nbsp &nbsp  making &nbsphumans &nbspexist&nbsp and making them evolve is what drives us crazy.<br>"
					+" &nbsp &nbsp &nbsp &nbsp That's our passion, our mission, our oxygen."
					+" </div> "
					
				  +"</div>")
				  .hide()
				 .appendTo("#why1");
				 
				  // animating the content
				$("#whycontent").delay(1500).fadeIn();	

			}	
	});	 
	 
 
	
});