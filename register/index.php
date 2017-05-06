<?php
include "phpcon.php"
?>	
<!DOCTYPE html>
<html>
<head>
<title> Register </title>
<link rel="icon" href="fevi.png" type="image/png" sizes="16x16">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'>
<html lang="en">
<meta name="keywords" content=" Smaya register, register at smaya, smayans register   ">

<meta name="description" content=" Register at Smaya to show your love, your support and to keep informed of our progress. " >

</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<link rel='stylesheet' type="text/css" href="regcss.css">
<script src="jquery-1.11.3.min.js"> </script>
<script src="regjs.js"></script>
	<script src="jquery.animateNumber.min.js"></script>

<?php 
	$rs=mysqli_query($con,"select * from reg");
	$val = mysqli_num_rows($rs);
?>
<body>
	<div class="main">
		<div class="log"> 
			<img src="logo.png">
		</div>
		<div id="tt" ><div id="tt">Registered <span id="total"><?php echo $val ?></span> </div> </div>
		<div class="form">
		<input id="i1" name="name" placeholder="Your name" autocomplete="off" /><br>
				<span id="namealert" style="color:red;display:none"> </span><br>
		<input id="i2" name="nick" placeholder="Choose a nick name" autocomplete="off" /><br>
				<span id="nickalert" style="color:red;display:none"> </span><br>
		<input id="i3" name="email" placeholder="Your email id" autocomplete="off" ><br>
				<span id="emailalert" style="color:red;display:none"> </span><br>
		<lable> I am </lable> <select class="who" >
			 <option value="student"> a student</option>
			 <option value="employee"> an employee</option>
			 <option value="enterpreneur">an enterpreneur</option> 
			 <option value="other">other</option>	
	    </select><br>
		<input id='s' type="submit" name="reg" value="Register"/>  
		</div>
	</div>
</body>
</html>