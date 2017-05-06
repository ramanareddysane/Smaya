<?php
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$message=$_REQUEST['message'];
	
   $to = "smayainfo@gmail.com";
   $subject = $name." from ".$email;
   $header = "From:ceo@smaya.co \r\n";
   $retval = mail ($to,$subject,$message,$header);
   if( $retval == true )  
   {
      echo "Message sent successfully...";
   }
   else
   {
       echo "Message could not be sent...";
   }
?>