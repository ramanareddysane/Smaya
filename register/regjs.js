$(document).ready(function(){			
	var  n=parseInt($("#total").text());
	// alert(n);
	$('#total')
	  .prop('number',0)
	  .animateNumber(
		{
		  number: n
		},
		3000
	  );
		
	// on clicking logo 
	$(".log").click(function(){
		
		window.location.href="http://www.smaya.co";
	});	
				  
	  	$("input").focus(function(){
		$(this).next().next().fadeOut(1000);
		});
	
		$(".who").change(function(){
				if($(this).val()=="other"){
					$("<span id='ex'><input id='extra' placeholder='please sepecify' name='extra' /><br></span>").insertBefore("#s").hide().slideDown();
				}else {
					$("#ex").slideUp();
					$("#ex").delay(500).queue(function(next){
						$("#ex").remove();
						next();
					});		
				}
		});
	
		// on clicking submit button
		$("#s").click(function(){
			$("input + + span").html("");
			$(this).val("Registering...").css({opacity:0.4}).attr('disabled','disabled');
			// alert("");
			var name="", nick="", email="", cat="";		
			name=$.trim($("#i1").val()).replace(/ +(?= )/g,'');
			nick=$.trim($("#i2").val()).replace(/ +(?= )/g,'');
			email=$.trim($("#i3").val());
			
			if(name== ""){
				$("#namealert").html("How can we call you without your name? <br> Fill this space, please.").show();
			}
			if(nick==""){
				$("#nickalert").html("We are your friends and  friends need a <br> nick name.Fill this space, please").show();
			}
			if(email==""){
					$("#emailalert").html("We need some contact to be in touch. <br> Fill this space please").show();				
			}
			if($(".who").val=="other") {
				cat=$("#extra").val();		
			}
			if(email==""){
			   	$("#emailalert").html("We need some contact to be in touch. <br> Fill this space please").show();				
			}else 
				cat=$(".who ").val();	
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/			
			if(!email.match(re)) {
					$("#s").removeAttr('disabled').val("Register").css({opacity:'1'});
					$("#emailalert").text("Enter a valid email address").show();
				 return false;
			}		
			if(email== "")
			     	$("#emailalert").text("").show();
			if( name=="") {
					alert("Please fill  all  the fields");
					$("#s").removeAttr('disabled').val("Register").css({opacity:'1'});
					return;	
				}
				
	
	       $.post('check.php',{email: email}).done(function(data){
				if(data==email){
					$("#i3").val("");
					$("#emailalert").text("It seems you have registered earlier").show();
					$("#s").removeAttr('disabled').val("Register").css({opacity:'1'});		
						
				 }else {							 
					$.post( "regsave.php", { name:name, nick:nick, email:email, cat:cat})
							.done(function( data ) {
							var posthtml=("Thanks for your love. Keep loving. We will be in touch."); 	
							$(".form").html(data).css({'font-size':'30px','line-height':'2.6rem','box-shadow':'0px 0px 1px solid silver'});
							setTimeout(function(){
								window.location.href = "http://smaya.co";
								}, 5000);
					});
				 }
			});	
		});

	
});