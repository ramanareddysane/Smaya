$(document).ready(function(){
	 $("nav").css({backgroundColor:'rgba(123,123,123,0)'});
	var bool=true;	
	
	$(window).scroll(function(){
		if($(window).scrollTop()>83){	
			$("nav").stop().animate({backgroundColor:'#E77346'},500,function(){				
				if($(window).width()<768)
					$("#extrareg").finish().slideDown(434);
			});
			$(".collapsed").stop().animate({backgroundColor:'#fff'},500);
		}else{
				$("nav").finish().animate({'backgroundColor':'rgba(124,12,12,0)'});
				$("#extrareg").finish().hide(12);	
		}
	});
	
	$(".collapsed").click(function(){
		$(".navbar-collapse").css({background:'#e77346'});
		if($(window).scrollTop()>83)
			$("#extrareg").toggle(123);
	});	

	$(window).resize(function(){
		if(!$(".collapsed").is(":visible")){
			$(".navbar-collapse").css({background:'none'});
		}
		if($(window).scrollTop()>83){
		 if($(".collapsed").is(":visible")){
			$("#extrareg").show(123);
		 } else {
			$("#extrareg").hide(123);
		 }		 	
		}
	});
	
	// handling the warning messages
	$("input").focus(function(){
		$(this).next().fadeOut(334);		
	});
	$("textarea").focus(function(){
		$(this).next().fadeOut(334);
	});
	
	
	
	// Script for sending mail 
	$("#submit").click(function(){
		$(this).val("sending...").css({opacity:0.4}).attr('disabled','disabled');
		
		var name,email,message;
		name=$("#name").val();
		email=$("#email").val();
		message=$("#msg").val();
		
		// validating the fields
		// validating the name
		if(name==""){
			$("#namealert").html("please enter your name").show();
			$("#submit").removeAttr('disabled').val("send").css({opacity:'1'});	
			return false;	
		}
		// validating the email
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/			
		if(email==""){
			$("#emailalert").text("Enter your email").show();
			$("#submit").removeAttr('disabled').val("send").css({opacity:'1'});	
			return false;	
		}
		if(!email.match(re)) {
				$("#submit").removeAttr('disabled').val("send").css({opacity:'1'});
				$("#emailalert").text("Enter a valid email address").show();
			 return false;
		}
		// validating the message
		if(message==""){
			$("#msgalert").text("Enter your message").show();
			$("#submit").removeAttr('disabled').val("send").css({opacity:'1'});	
			return false;
		}
		// Sending the mail after validating
		$.post("mail.php",{name:name,email:email,message:message})
			.done(function(data){
				if(data=="Message sent successfully..."){
					 $(".form").fadeOut(2000,function(){
						$(".form").html("Thanks for your feedback.\n We will be in touch").fadeIn(1234);
					})			
				}else 
					alert("Something went wrong.Please try again");
			 });
		
		
	});
	
	
});