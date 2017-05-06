 $(document).ready(function(){
	// on pressong the escape key  
	$(document).keydown(function(e){ 
	   if( e.which==27 )
		{
			if($("#box").is(':visible')){
					$("#box").slideUp();
					$("#login").show("scale");							
			}
			if($("#chat").css("width")=="420px"){
				$("#chat").children().not(".b").remove();
				$("#chat").animate({width:'130',height:"130"});
				$("#chat").find(".b").delay(400).show(2);	
			}
			 $(".contentc").remove();
			 $(".bigc").clearQueue();
			 $("#quote").clearQueue();
			 $(".contentc").clearQueue();
			 $(".temp").clearQueue();
			 $(".bigc").hide("scale"); 
			 $("#close").clearQueue();					   
		    
			$(".bigc").queue(function(next){	
					  $(this).remove();
					  next();		
			});			 
			$("#bckgrnd").delay(500).fadeOut(12,function(){
				if(special==1){
					  setTimeout(function(){
						  $("#believe").trigger("click");
					  },600); 
					
				}
			});	  
			$(".w").delay(564).show("scale");
			 
			$("#bckgrnd").queue(function(next){			 
				  $(this).dequeue();  
				  next();		
			});
			  
			$(".w").queue(function(next){	
				  $(this).dequeue();  
				  next();		
			});   
		}
	else if(e.which==13)
	{   
		if($("#box").is(':visible'))
		{
			$("#submit").click();
			
		}
	}		
		
		
     }); 	
});
	 
	 