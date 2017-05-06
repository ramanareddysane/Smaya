
	
$(document).ready(function(){
	
	$(".qw").click(function(){
    //Creation of elements   
	   $("<div id='as'> </div>").addClass("main").appendTo("#out");   
    var styles=$(this).css([ "width","height", "background-color", "border-radius", "position","top","left" ]); 
       $("#as").css(styles);
       $("<div class='temp' >  </div>").appendTo("#as"); 
       $(".temp")
	    .css({'width': '1.563rem' ,'height':'1.563rem','position': 'absolute','top': '30%', 'left': '30%'});	   
	  
	   $("<i id='quote' > </i>").appendTo("#as");
	   $("#quote").css({'position': 'absolute','bottom':'10%', 'left':'20%','margin':'0.625rem' });
	   
	   $("#quote").html("\" We are here to gift people RELATIONS <br>"
	       +'not just devices\"' );
	   $('#quote').hide();
	   
	   
		$("<div id='middle'> </div>").appendTo("#as");
		$("#middle").css({background:'red', width:'80%', height:'20%',
						  position:'absolute',top:'20%',left:'10%',
						 });
						  
		$("#middle").css("overflow","auto");	
		$("#middle").text('efdfsdfsfa ae fgdahefdfsdfsfa ae fgdah fgdahefdfsdfsfa ramanare'
		+"efdfsdfsfa ae fgdahefdfsdfsfa ae fgdahefdfsdfsfa ae fgdah fgdahefdfsdfsfa"
		+"efdfsdfsfa ae fgdahefdfsdfsfa ae fgdahefdfsdfsfa ae fgdah fgdahefdfsdfsfa"
		+"efdfsdfsfa ae fgdahefdfsdfsfa ae fgdahefdfsdfsfa ae fgdah fgdahefdfsdfsfa"
		+"efdfsdfsfa ae fgdahefdfsdfsfa ae fgdahefdfsdfsfa ae fgdah fgdahefdfsdfsfa"
		+"efdfsdfsfa ae fgdahefdfsdfsfa ae fgdahefdfsdfsfa ae fgdah fgdahefdfsdfsfa"
		+"efdfsdfsfa ae fgdahefdfsdfsfa ae fgdahefdfsdfsfa ae fgdah fgdahefdfsdfsfa"
		+"efdfsdfsfa ae fgdahefdfsdfsfa ae fgdah");
		$("<button id='down'>down</button>").appendTo("#as");
		$("#down").css({position:'absolute', top:'60%', left:'30%' });
		$("<button id='up'>up</button>").appendTo("#as");
		$("#up").css({position:'absolute', top:'10%', left:'30%'});
		
	//animations 
       $(this).delay(100).fadeOut(123);
	   $("#out").css("opacity","0.9");
	   $("#out").fadeIn(1234);
	   $("#as").css('position','absolute');
	   $("#as").animate({top:'15em',left:'33em'},1000); 
	   $(".temp").delay(1000).animate({ top:'5%',left:'45%' },1000);
	   $ ("#as").animate({ top:'15%',left:'25%', height:'37.5rem', width:'37.5rem' },1000);
	   $("#quote").delay(2000).fadeIn(1200);
	

    var prev=0;
    var pres=0;	   
	// click events
     $('#down').click(function(){
     	  $("#middle").animate({scrollTop:'+=10'}); 
	 });	
    $('#up').click(function(){
	    $("#middle").animate({scrollTop:'-=10'}); 	   


     });	
  
  });
     
	
});  