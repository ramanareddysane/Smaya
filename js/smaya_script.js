 $(document).ready(function(){
	$("#bubbles").show();
  $(".b").hide();    
  $("#chat").hide();
  $(".lb").hide();	
  $('.l').hide();
  
 // producing emerging effect 
  $("div#smaya").animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#smaya").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#aapi").delay(500).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#aapi").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#sic").delay(1200).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#sic").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#why").delay(2500).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#why").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#connect").delay(1200).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#connect").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#video").delay(2500).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#video").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#believe").delay(2600).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#believe").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#team").delay(1700).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#team").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#help").delay(2200).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#help").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
    $("div#names").delay(2300).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#names").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
   
    $("div#contacts").delay(2800).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#contacts").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
   
    $("div#lang").delay(2700).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#lang").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
   
    $("div#journey").delay(2500).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#journey").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
  
    $("div#blog").delay(2600).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#blog").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
   
  $("div#register").delay(1800).animate({height:'0.8125rem',width:'0.8125rem'},1200);	
  $("div#register").delay().animate({height:'0.625rem',width:'0.625rem'},100);	
   
// animating the positions   
  
$("#smaya").delay().animate({left:'14', top:'110'},1000);
$("#aapi").delay().animate({left:'550', top:'250'},1000);
$("#sic").delay().animate({left:'740', top:'130'},1000);
$("#why").delay().animate({left:'630', top:'440'},1000);
$("#connect").delay().animate({left:'820', top:'290'},1000);
$("#believe").delay().animate({left:'440', top:'550'},1000);
$("#team").delay().animate({left:'200', top:'640'},1000);
$("#help").delay().animate({left:'950', top:'60'},1000);
$("#names").delay().animate({left:'480', top:'80'},1000);
$("#contacts").delay().animate({left:'850', top:'560'},1000);
$("#journey").delay().animate({left:'1134', top:'600'},1000);
$("#blog").delay().animate({left:'1074', top:'460'},1000);
$("#register").delay().animate({left:'1240', top:'60'},1000);
$("#lang").delay().animate({left:'1032', top:'250'},1000);


 // animating the dimensions
 $("#smaya").delay().animate({ height:'29.75rem', width:'29.75rem',padding:'1.438rem'});
 $("#aapi").delay().animate({ height:'170', width:'170'});
 $("#sic").delay().animate({ height:'140', width:'140'});
 $("#why").delay().animate({ height:'190', width:'190'});
 $("#connect").delay().animate({ height:'190', width:'190'});
 $("#video").delay().animate({ height:'250', width:'250'});
 $("#believe").delay().animate({ height:'145', width:'145'});
 $("#team").delay().animate({ height:'150', width:'150'});
 $("#help").delay().animate({ height:'160', width:'160'});
 $("#names").delay().animate({ height:'140', width:'140'});
 $("#contacts").delay().animate({ height:'200', width:'200'});
 $("#lang").delay().animate({ height:'110', width:'110'});
 $("#journey").delay().animate({ height:'150', width:'150'});
 $("#blog").delay().animate({ height:'120', width:'120'});
 $("#register").delay().animate({ height:'90', width:'90'});
 // $("#register").css({'height':'70','width':'70'}).hide().show("scale");
 
 $('.w')
      .delay(2000)
      .queue(function(next){ 
        $(this).css("box-shadow","0rem 0rem 0.625rem grey"); 
        next(); 
	});			
  $('.b').delay(5000).slideDown(1234);
  $('#chat').delay(1734).show("slide",{direction:"right"},1233);
  
     
// showing thw footer
$('.foot').delay(5190).slideDown(1234);

 });
   

$(document).ready(function(){
	$('#lang').click(function(){	
     if($("#telugu").css("left")=='1152px') 
		 {
		  $(".lb").hide(800);		  
		  $('.l').animate({top:'270',left:'1052'},1000);
		 }
		 else		
	     {
		$(".l").show();	 
           $('#telugu').animate({top:'270',left:'1152'},1000);
           $('#hindi').animate({top:'190',left:'1112'},1000);
           $('#english').animate({top:'350',left:'1100'},1000);	
	       $(".lb").show(1500); 
		 } 
	});
			
	
});	   
	   