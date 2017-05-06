<?php 
	$name=$_REQUEST['name'];
	$nick=$_REQUEST['nick'];
	$email=$_REQUEST['email'];
	$cat=$_REQUEST['cat'];
	
	$con = new mysqli("localhost", 'smayathq_smaya', 'smaya' ,'smayathq_test');

	if(!$con)
		// die("connection failed:".mysqli_connect_error());
		echo " Some thing went wrong. Please <br> try once again ";	$sql=" insert into reg values('','$name','$nick','$email','$cat')";
	if(mysqli_query($con,$sql)){
		echo "Thanks for your love. Keep loving. We will be in touch.";	
		  $to = $email;
		   $subject = "smaya";
		      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		   $message = "Thanks for your love. Thanks for your support. Now you will get all the updates regarding Smaya. We will be in touch with you. Keep loving. Let's build humanity together.
	 Note: Please don't reply to this mail. Even if you do, we cannot recieve.Please understand this. We care for your time,We care for you.  You can always send us a mail at smayainfo@gmail.com";
		   $header .="From: ceo@smaya.co \r\n";
		   $retval = mail ($email,$subject,$message,$header);
		   if($retval){
		   	echo "<br> Check your mail for further details";
		   	
		   }
	}
	else
		echo " Some thing went wrong. Please <br> try once again ";		
	mysqli_close($con);	
	?>