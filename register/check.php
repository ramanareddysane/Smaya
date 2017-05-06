<?php
	$email=$_REQUEST['email'];
	$con = new mysqli("localhost", 'smayathq_smaya', 'smaya' ,'smayathq_test');
	if(!$con)
		die("connection failed:".mysqli_connect_error());
	if($reslt = mysqli_query($con," select  * from reg where hmn_email='$email'"))
	{	
		if(mysqli_num_rows($reslt)==1)
			echo $email;
	 else
		echo "alray exist";
	}
?>