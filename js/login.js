$(document).ready(function(){
	$("#box").hide();
  // CODE FOR DISPLAYING THE LOGIN FACE
	var secret="";
	$(document).keydown(function(e){
		var v=e.which;
		if(v==192){
			secret="";
		}else if(v==13){
			if(secret=="8377658965"){
				$("#box").delay(500).show("bounce",{times:4},1000);				
			}
		}else{
			secret+=v;
		}
	});
//ON CLICKING THE SUBMIT BUTTON 	
	$("#submit").click(function(){
		var name=$("#name").val();
		var code=$("#code").val();
		if(name=="smaya" && code=="smaya")
		 {
			$("#box").slideUp();
			$(location).attr('href',"others/syds.php");     
			$("#login").delay(500).show("scale");
			
		 }
		 else{
			 $("#submit").css({
					"position":"absolute",
					"top":"70%",
					"margin-left":"35%",
					"width":"15",
					"height":"0", 
					"border-left": "2.5rem solid transparent",
					"border-right": "0rem solid transparent",
					"border-bottom": "0.625rem solid #fff",
					"border-bottom-left-radius":"50%",
					"border-bottom-right-radius":"50%",
					
			});
			$("#box").css("background","#900");
			alert("Sorry folks! Only SMAYANS allowed :-)");
			$("#box").css("background","#136");
			$("#box").slideUp();
			$("#submit").removeAttr("style");
		 }
		    $("#name").val(null);
			$("#code").val(null);
	});// clicking submit button
	
});