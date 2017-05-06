$("document").ready(function(){
	var adno,adval,pi,finaladno;
	$("#admissionno").keyup(function(){
		adval=$(this).val();
		if(adval.length>=5){
			pi=parseInt(adval)
			if(pi%1000==1 && pi>=12001 && pi<=15001){
				$("#applybtn").css({opacity:'1'});
				$("#applybtn").prop("disabled",false);
			}
		}else{
				$("#applybtn").css({opacity:'0.5'});
				$("#applybtn").prop("disabled",true);
				$("#selection").hide(12);
				$(".formarea").hide(12);
			}
	});
	
	$("#admissionno").keydown(function(e){
		if($(this).val().length>9 && e.which!=8 && e.which!=37 && e.which!=39 )
			return false;
	});
	
	$("#applybtn").click(function(){
		adno=$("#admissionno").val();
		var test=parseInt(adno);
		if(adno.length!=10)
			return false;
		if(test<12001 || test >15001)
			return false;
		finaladno=adno;
		$("#selection").fadeIn();
	});
	
	 $("#select").change(function(){
		var val=$(this).val();
		if(val=="idea"){
			$("#peopleform").hide();
			$("#ideaform").fadeIn(700);
		}
		else if(val=="people"){
			$("#ideaform").hide();
			$("#peopleform").fadeIn(700);			
		}
	 });
	  
	 $("#ideaphone").keydown(function(e){
		var k=e.which;
		if(k!=8 && k<48 || k>57 ){
			return false;
		} 
		len=$(this).val().length+1;
		if(len>10 && k!=8)
			return false;
		return true;
	});
	 
	  
	  //ON CLICKING IDEA SUBMIT BUTTON
	$("#ideasubmit").click(function(e){
		$(this).val("submittng...").prop( "disabled", true);
		$(this).css({opacity:0.5});
		var idea=$("#idea").val();
		var customers=$("#customers").val();
		var bm=$("#bm").val();
		var name=$("#ideaname").val();
		var email=$("#ideaemail").val();
		var phone=$("#ideaphone").val();
		if(idea==""||customers==""||bm==""||name==""||email==""||phone==""){
			$(this).val("submit").prop( "disabled", false);
				$(this).css({opacity:1});
		}	
		else {
			if(phone.length!=10){
				$(this).val("submit").prop( "disabled", false);
				$(this).css({opacity:1});
				return false;
			}
			$.post("ideamail.php",{name:name, email:email, idea:idea, customers:customers, bm:bm, phone:phone,adno:finaladno})
				.done(function(data){
					if(data=="send")
						$("#ideaform").fadeOut(400,function(){
						var targetOffset = $("#select").offset().top;
   						     $('html,body').animate({scrollTop: targetOffset}, 700);
							$(this).html("Thank you for submitting. We genuinely wish you get succeed. "
							+"Check your mail until then. Have a great day. Cheers! &#9786").css({'display':'inline-block','font-size':'20px',width:'100%'}).fadeIn(700);
						});
				});
		}
	});


	$("#peoplephone").keydown(function(e){
		var k=e.which;
		if(k!=8 && k<48 || k>57 ){
			return false;
		} 
		len=$(this).val().length+1;
		if(len>10 && k!=8)
			return false;
		return true;
	});
	
	
  // ON CLICKING PEOPLE APPLY BUTTTON	
	$("#peoplesubmit").click(function(e){
		$(this).val("submittng...").prop( "disabled", true);
		$(this).css({opacity:0.5});
		var passion=$("#passion").val();
		var worktext=$("#workdone").val();
		var helpsmayatext=$("#helpsmaya").val();
		if(helpsmayatext=="")
			 helpsmayatext="empty";
		var peoplename=$("#peoplename").val();
		var peopleemail=$("#peopleemail").val();
		var phone=$("#peoplephone").val();
		if(passion==""||worktext==""||peoplename==""||peopleemail==""||phone==""){
			$(this).val("submit").prop( "disabled", false);
				$(this).css({opacity:1});
		}else {
			if(phone.length!=10){
				$(this).val("submit").prop( "disabled", false);
				$(this).css({opacity:1});
				return false;
			}
			e.preventDefault();
			$.post("peoplemail.php",{passion:passion,work:worktext,name:peoplename,email:peopleemail,phone:phone,help:helpsmayatext,adno:finaladno})
				.done(function(data){
					if(data=="send")
						$("#peopleform").fadeOut(400,function(){
							var targetOffset = $("#select").offset().top;
   						  	 $('html,body').animate({scrollTop: targetOffset}, 700);
							$(this).html("Thank you for applying. We genuinely wish you get succeed. "
							+"Check your mail until then. Have a great day. Cheers! &#9786").css({'display':'inline-block','font-size':'20px',width:'100%'}).fadeIn();
						});
						else
							alert(data);
				});
		}
	});
	
	
	
});