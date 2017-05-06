<?php 
	$con=new mysqli('localhost','smayathq_smaya','smaya','smayathq_test');
	if(!$con){
		echo "Something went wrong. Please try again later";
		exit(1);
	}
	?>
	
	
<!DOCTYPE html>
<html>
<head>
<title> post into blog </title>
<script src="js/jq.js"> </script>
</head>
<body>
<script>
	$('document').ready(function(){
		$("#post").click(function(e){
			var head=$("#head").val();
			var cont=$("#cont").val();
			if(head=="" || cont==""){
				alert("it seems u have missed some thing");
				e.preventDefault();	
			}
		});
	});
</script>

<div id="fm">
	<form action="<?php echo $_SERVER['PHP_SELF']  ?>" method="post" >
	Post Heading :<br /> <input name="head" id="head" /><br />
	Post content : <br /> <textarea id="cont" rows="10" cols="50" name="cont" placeholder=" write each paragraph in between <p> and </p>." id="cont" ></textarea><br /><br />
	<input  id="post" type="submit"  name="submit"> 
	</form>
</div>
</body>
</html>
	<?php
	if(isset($_POST['submit'])){
	  $head=$_POST['head'];
	  $timestamp=time();
	  $time=date('d/m/Y h:m a');
	  $cont=$_POST['cont'];
	  $cnt=mysqli_real_escape_string($con,$cont);
	 $sql="INSERT INTO blog VALUES('','','$head','$timestamp','$time','$cnt')";
	 if(mysqli_query($con,$sql)){
		$id=mysqli_insert_id($con);
		$p_id="pst".$id;
	    if(mysqli_query($con,"UPDATE `smayathq_test`.`blog` SET `p_id`='$p_id' WHERE `blog`.`id`='$id'")){
			?>
				<script>
					$('document').ready(function(){
						$("#fm").html("<h1> successfully inserted with id "+'<?php echo $p_id ?>'+"</h1>");
						window.location.href='http://blog.smaya.co/'
					});
				</script>
			<?php	
		}
	 }else
	  echo mysqli_error($con);
	}
?>
