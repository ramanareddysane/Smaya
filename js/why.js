$(document).ready(function(){

	  $("#why").click(function(){

			if($("#box").is(':visible'))
			{
				$("#box").slideUp();
				$("#login").show("scale");							
			}
  
			
		if(!event.detail || event.detail==1){		  
	  
				$(this).fadeOut();
				 $("#bckgrnd").fadeIn(500);
					  
				//big circle creation
				 $("<div id='why1' class='bigc'>  </div> ").appendTo("#bckgrnd");
				var styles=$(this).css( [ "width","height","position","top",
											"left","background-image"
											,"border-radius"] );  
				$("#why1").css(styles);
				$("#why1").css("box-shadow","0rem 0rem 0.625rem black");
						
				// heading creation
				$("<div class='temp'> </div>").appendTo("#why1"); 
				$(".temp").css({'width': '1.563rem' ,'height':'1.563rem',
									'position': 'absolute',
									'color':'white',	
									'top': '10%', 'left': '30%',
								   });	
				$("<b id='head' > Why </b>").appendTo(".temp");
				$("#head").css({'font-size':'1.875rem', "font-family": "'Salsa', cursive" });		 
					
				// animations
				$("#why1").animate({top:'40%',left:'30%'},500);
				$(".temp").delay(510).animate({top:'3%',left:'43%'},700);
				$("#why1").animate({top:'10%',left:'22%',width:'43.75rem',height:'43.75rem'},800);
				 
				//increase the size of the headinng	  
			    $("#head").delay(1200).queue(function(next){
					$(this).css("font-size","3.125rem");
					next();					
				});
				
				//close button 
			$("<div class='close' title='u can press esc too' > </div>").appendTo(".bigc").hide();	
            $(".close").html("<img  style='cursor:pointer;width:2.5rem;height:2.5rem;border-radius:50%;position:absolute;top:0rem;right:0rem' src='close.png'>");
			$(".close").delay(1200).fadeIn(12);
			
				// quote at the bottom
				$("<i id='quote' > </i>").appendTo("#why1");
				$("#quote").css({'position': 'absolute','bottom':'5%',
									'left':'26%','color':'white',
									'font-size':'1.25rem',
									'display':'none'});
				$("#quote").html("\" We are here to gift people RELATIONS <br>	"
					+' &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp&nbsp&nbsp  &nbsp &nbsp &nbsp not just products\"' );
				$('#quote').delay(800).fadeIn(500);
				
				
				//on clicking close button
				$(".close").click(function(){
				var el = $.Event('keydown');
						el.which = 27; 
						$(document).trigger(el);	
				});
						

				// creating middle content
				$("<div id='whycontent' class='contentc' style='width:43.75rem;height:27.5rem;color:white;opacity:1;font-size:1.25rem;background:geen;padding:0.3125rem;position:absolute;top:19%;''>"
					+" <p align='justify' style='textindent:4%'>"
					+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp We believe everyone are driven by something. We too are driven by <br>"
					+" &nbsp &nbsp &nbsp &nbsp &nbsp this passion of connecting people equally in real and virtual worlds.</p>"
					+" <p align='justify'> &nbsp &nbsp &nbsp &nbsp  We believe you just have to know your 'WHY?', then everything will fall into <br>"
					+"  &nbsp &nbsp place, just everything.This is our Why? Why we wake up everyday excited about <br>"
					+"&nbsp  doing something? Why we are crazy to make this world a better place to live in? </p> <br>"
					
					+" <div class='cont' align='' style='width:700;height:7.188rem;background-color:gren;padding:0.3125rem;' >"
					+" <div align='center' style='float:left;height:40%;font-size:1.875rem;width:22%;background-color:#28367'>"
					+" <div style='float:left;' ><img src='vision.jpg'  style='border-radius:50%;height:2.5rem;width:2.5rem;'></div>"
					+" 	<div style='float:left;padding-top:0.3125rem;padding-left:0.1875rem;'><b style=''>Vision</b>:</div>"
					+"</div> "
					+"  To see more and more connected people in the REAL WORLD, &nbsp   &nbsp  &nbsp   more real talks, more real smiles, "
					+"  more genius people connecting  &nbsp with people from other parts of the  world."
					+"  To see humanity prevail  is  our vision."
					+"</div> "
					
					+" <div class='cont' align='justify'  style='width:650;height:7.5rem;background-color:reen;margin-left:5%;' >"
					+" <div align='center' style='float:left;height:36%;font-size:1.875rem;width:27%;backgroud-color:#258367'>"
					+"   <div style='float:left;' ><img src='mission.jpg'  style='border-radius:50%;height:2.5rem;width:2.5rem;'></div>"
					+"   <div style='float:left;padding-top:0.3125rem;padding-left:0.3125rem;'><b style=''>Mission</b>:</div>"
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

				
				
			}	//preventing double click
	});	 
	 
 
	
});