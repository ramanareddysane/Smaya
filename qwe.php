<script src="js/jquery-1.11.3.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="js/bounce.min.js"> </script>
<script>
	$(document).ready(function(){
		$(".b").click(function(){
			$("#chat").find('> .b').hide();
			$("#chat").css("cursor","default");
			$("#chat").delay(100).animate({width:'360',height:'360'},700);
			var styles={'width':'90%','border-radius':'10px','outline':'none','font-size':'15px','height':'37px','margin-left':'7%','margin-top':'7%','padding-left':'15px'};
			$("<input id='nam' placeholder='enter your sweet name '></input>").appendTo("#chat").css(styles).hide().delay(600).slideDown(334);
			$("<input id='email' placeholder='let us know your email'></input>").appendTo("#chat").css(styles).hide().delay(800).slideDown(334);
			$("<textarea  placeholder='your precious words' ></textarea>").appendTo("#chat").css(styles);
			$("textarea").css({"height":"42%",'overflow':'auto',"resize":"none"}).hide().delay(1000).slideDown(634);
			var but={"width":"60%","margin-left":"20%","padding":"5px","outline":"none","cursor":"pointer","margin-top":"5%","border-radius":"30px 0px 30px 0px"};
			$("<button>click here to send</button>").css(but).appendTo("#chat").hide().delay(1600).show("slide");		
		});
		
		$("#chat").on("click","button",function(){
			var t=$("#chat");
			var nam=t.find("#nam").val();
			var em=t.find("#email").val();
			var msg=t.children("textarea").val();
			$.post("mail.php",{name:nam,email:em,message:msg})
			.done(function(data){
				alert(data);
				$("#chat").children().not(".b").remove();
				$("#chat").animate({width:'130',height:"130"});
				$("#chat").find(".b").delay(400).show(2);
			});			
		});	
	});
</script>
<style>
#chat{ 
      height:130px;
      width: 130px;
	  position:fixed;
	  bottom:0px;
	  right:0px;
	  background:#523;
  	  border-radius:30px 0px 0px 0px;	  
 }
 textarea::-webkit-scrollbar{
     width:4px;
    } 	
	 textarea::-webkit-scrollbar-thumb:hover{
		 background-color:#121; 
		 border:1px solid #723;
	  }

 </style>
 <div id="chat" class="w" style="cursor:pointer;color:black">
	<div class="b">
	    <br>
		<b style="font-size:20px;padding-left:30px;color:white"> Drop Us</b> <br>
        <b style="font-size:20px;padding-left:35px;color:white"> a MAIL</b> <br><br>
        <i style="color:white;padding-left:20px "> Incase you are </i>		
        <i style="color:white;padding-left:5px "> too far to reach us </i>	
	</div>	
</div>  


