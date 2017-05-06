<?php
	$con=new mysqli("localhost","root","","mydb");
	if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
	}
	$id=$_REQUEST['name'];
	$rs=mysqli_query($con,"select * from user where uname='ramana'");
		if($rs) 
			while($row=mysqli_fetch_assoc($rs))
			{
			  $cont=$row['pic'];
			}
			header("content-type:image/png");
				echo $cont;			 	
				
?>