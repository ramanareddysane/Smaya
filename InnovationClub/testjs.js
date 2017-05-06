$("document").ready(function(){
	
	$("#close").click(function(){
		$("#form").hide(123,function(){
			$("#background").fadeOut(1234);
			$("#admissionno").val("");
		});
	});
	
	var adno,formtype="ideas";
	$("#applybtn").css({opacity:'0.5'});
	$("#applybtn").prop("disabled",true);
	var adval,pi,finaladno;
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
		$("#background").fadeIn(200,function(){
			$("#form").fadeIn(300);
		});
	});

	$("#background").hide();
	$("#form").hide();
	$(".formarea").hide();
	$("#ideaform").fadeIn();
	var l=$("#total").offset().left;
	var t=$("#total").offset().top;
	
	$("#form").css({position:"fixed",left:l+50});
	
	$(".head>span").click(function(){
		$(".head").css({opacity:'0.5',border:'none',color:'black'});
		$(this).parent().css({opacity:'1','border-bottom':'2px solid saddlebrown'});
		var presant=$(this).parent().attr("id");
		if(presant!=formtype){
			formtype=presant;
			$(".formarea").hide();
			if(formtype=="ideas")
				$("#ideaform").delay(400).fadeIn(600);
			else if(formtype=="people")
				$("#peopleform").delay(400).fadeIn(600);
			else 
				$("#qandfform").delay(400).fadeIn(600);
		}
	});
	$("#phone").keydown(function(e){
		var k=e.which;
		if(k!=8 && k<48 || k>57 ){
			return false;
		} 
		len=$("#phone").val().length+1;
		if(len>10 && k!=8)
			return false;
		return true;
	});
 
 //ON CLICKING IDEA SUBMIT BUTTON
	$("#ideasubmit").click(function(e){
		$(this).val("submittng...").prop( "disabled", true);
		$(this).css({opacity:0.5});
		var idea=$("#ideatext").val();
		var customers=$("#customertext").val();
		var bm=$("#bmtext").val();
		var name=$("#name").val();
		var email=$("#email").val();
		var phone=$("#phone").val();
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
		 	e.preventDefault();
			$.post("ideamail.php",{name:name, email:email, idea:idea, customers:customers, bm:bm, phone:phone,adno:finaladno})
				.done(function(data){
					if(data=="send")
						$("#ideaform").fadeOut(400,function(){
							$(this).html("Thank you for submitting. We genuinely wish you get succeed. "
							+"Check your mail until then. Have a great day. Cheers! &#9786").css({display:'inline-block',
															'font-size': '29px',top:'162px',left:'10%',width:'80%'}).fadeIn()
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
		var passiontext=$("#passiontext").val();
		var worktext=$("#worktext").val();
		var helpsmayatext=$("#helpsmayatext").val();
		if(helpsmayatext=="")
			 helpsmayatext="empty";
		var peoplename=$("#peoplename").val();
		var peopleemail=$("#peopleemail").val();
		var phone=$("#peoplephone").val();
		if(passiontext==""||worktext==""||peoplename==""||peopleemail==""||phone==""){
			$(this).val("submit").prop( "disabled", false);
				$(this).css({opacity:1});
		}else {
			if(phone.length!=10){
				$(this).val("submit").prop( "disabled", false);
				$(this).css({opacity:1});
				return false;
			}
			e.preventDefault();
			$.post("peoplemail.php",{passion:passiontext,work:worktext,name:peoplename,email:peopleemail,phone:phone,help:helpsmayatext,adno:finaladno})
				.done(function(data){
					if(data=="send")
						$("#peopleform").fadeOut(400,function(){
							$(this).html("Thank you for applying. We genuinely wish you get succeed. "
							+"Check your mail until then. Have a great day. Cheers! &#9786").css({display:'inline-block',
															'font-size': '29px',top:'162px',left:'10%',width:'80%'}).fadeIn()
						});
						else
							alert(data);
				});
		}
	});
	
	
 //WHEN GIVING FEEDBACK		
	$("#qandfsubmit").click(function(e){
		$(this).val("submittng...").prop( "disabled", true);
		$(this).css({opacity:0.5});
		var qandftext=$("#qandftext").val();
	 	var name=$("#qfname").val();
		var email=$("#qfemail").val();
		if(qandftext==""||name==""||email==""){
			$(this).val("submit").prop( "disabled", false);
				$(this).css({opacity:1});
		}else {
			e.preventDefault();
			$.post("feedbackmail.php",{name:name,email:email,feed:qandftext,adno:finaladno})
				.done(function(data){
					if(data=="send")
						$("#qandfform").fadeOut(400,function(){
							$(this).html("Thank you for your feedback. We genuinely wish you get succeed. "
							+"Check your mail until then. Have a great day. Cheers! &#9786").css({display:'inline-block',position:'absolute',
															'font-size': '29px',top:'253px',left:'10%',width:'80%'}).fadeIn()
						});
						else
							alert(data);
				});
		}
	});	
	
	
	//ON pressig teh escape key
	$(document).keydown(function(e){
		if(e.which==27){
			$("#form").fadeOut(300,function(){
				$("#background").fadeOut(1234);
			});
			
		}
	});
	
	
	
});