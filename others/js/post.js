	$(document).ready(function(){
	$(".pst").hide();
		$("#postcircle").click(function(){
			$(this).animate({				
				opacity: 0.7,
				right: "+=1",
			},200);
			$(this).animate({				
				opacity: 1,
				right: "-=1",
			},200);
				$(this).delay(100).hide("scale");				
				$(".pst").delay(500).fadeIn(1000);
				$("#imd").html("");
				//displaying all fields
				$("#sel").show();
				$("#txtname").show();
				$("#posttext").show();
				$("#postb").show();
				$("#txtname:visible").focus();
			
		});
		
		//  closing of post form on pressing escape key
		$(document).keydown(function(e){
			if(e.which==27){
				// clearing all fields
				$("#sel").val("1");
				$("#txtname").val("");
				$("#posttext").val("");
				$("#postb").text("post");
				$("#imd").html("");
				$(".pst").fadeOut();
				$("#postcircle").show("scale");					
			}
		});
		//close the post cotainer
		$("#close").click(function(){
			var e=$.Event('keydown');
			e.which=27;
			$(document).trigger(e);
			
		 });
			//get user names
			$("#txtname").keyup(function(e){
				var val=$(this).val();
				$("#imd").html("");
				if(val.length==0){
					$("#div1").html("");					
				}
				else{
					$("#div1").show();
					$.ajax({
						method:"post",
						url:"get.php",
						data:{name:val}
					}).done(function(msg){
						// alert(msg);
						$("#div1").html(msg);
					});		  
				}
			});
			
			//entering suggested names in to the text box
			$("#div1").on('click','li',function() {
				$("#txtname").val($(this).text());
				$("#div1").hide();
				var nam=$("#txtname").val();				
				$.ajax({
					method:"post",
					url:"img1.php",
					data:{name:nam}
				}).done(function(data){
					$('#imd').html('<img src="data:image/png;base64,'+data+'" />');
				});					
			});
			//on entering the mouse over suggested list
			$("#div1").on('mouseenter','li',function() {
				$(this).css("background","grey");
			});
			$("#div1").on('mouseleave','li',function() {
				$(this).css("background","none");
			});
			
			//on loosing the focus of texr box 
			$("#txtname").on('blur',function() {
					$("#div1").delay(123).hide(4);
				var nam=$("#txtname").val();				
				$.ajax({
					method:"post",
					url:"img1.php",
					data:{name:nam}
				}).done(function(data){
					$('#imd').html('<img src="data:image/png;base64,'+data+'" />');
				});				
			});
			
			// on selecting the category
			$('#sel').change(function(){
					var s=$(this).val();
					if(s!='1')
						$("#postb").text("post under "+s);
					else{
						//alert("select a category");
						$("#postb").text("post");
					}	
			});
			
			// on clicking post button
			$("#postb").click(function(){
				// validating the content;
				var s=$("#sel").val();
				var n=$("#txtname").val();
				var p=$("#posttext").val();
				p=$.trim(p);
				if(p!=""&&s!='1'&&n!=""){
					//alert("success");
					$(this).html("&nbsp<img style='width:1.875rem;height:0.625rem;' src='http://ipn.gov.pl/__data/assets/image/0005/77621/ajax-loader_1.gif'>");
					$(this).prop("disabled", true);    
					//post the content 	
					$.post("savepost.php",{content:p,by:n,cat:s})
					.done(function(data){
						//alert(data);
						$("#postb").prop("disabled", false); 	
						//clearing all fields
						$("#sel").val("1");
						$("#txtname").val("");
						$("#posttext").val("");
						$("#postb").text("post");
						var image=$("#imd").html();
						
						//hiding all fields
						$("#sel").hide();
						$("#txtname").hide();
						$("#posttext").hide();
						$("#postb").hide();
						$("#close").click();	
						$.post("catpost.php",{'cat':s})
						.done(function(dat){
							$(".list").each(function(){
								// alert(s);
								// alert($(this).text());
								var v=$(this).text();	
								if(v == s){
									// alert("equal");
									$(this).css("color","black");
								}
								else if(v != s)
									$(this).css("color","white");
							});
							$("#posts_section ul").removeClass("default").addClass("category");
							$("#posts_section ul").html("");	
							$("#posts_section ul").html(dat);	
						});	
					});
				}else{
				  if(s=='1'){
					alert("u have to select a category");				
				   }
				   if(n==""){
						alert("enter a valid name");
				    }
					if(p==""){
					  alert("post some thing");
					}
				}					
			});	
				
	});