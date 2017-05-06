<?php
 $passion=$_REQUEST['passion'];
 $work=$_REQUEST['work'];
 $name=$_REQUEST['name'];
 $email=$_REQUEST['email'];
 $phone=$_REQUEST['phone'];
 $help=$_REQUEST['help'];
 $adno=$_REQUEST['adno'];
 $con=new mysqli('localhost','smayathq_smaya','smaya','smayathq_test');
 
 if(!$con){
	 die("connection failed".mysqli_connect_error());
 }
 $query="insert into peoples values('','$name','$email','$phone','$passion','$work','$help','no')";
 if(mysqli_query($con,$query)){
	 $id=mysqli_insert_id($con);
 }
 
$to = "smayainfo@gmail.com";
$subject = "$name has applied for job.";
$message ="
<b>Admission number: </b>$adno<br><br>
<b>mobile no:</b>$phone<br><br>
<h3>My passion is:</h3>
<p>$passion<p>
<h3>I have done this for my passion</h3>
<p>$work<p>
<h3>I think my passion helps Smaya in the following way</h3>
<p>$help<p>
";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From:ceo@smaya.co'. "\r\n".'Reply-To:'.$email."\r\n";

if(mail($to,$subject,$message,$headers)){
	mysqli_query($con,"update peoples set del_report='yes' where sap_id=$id");
	$to = "$email";
	$subject = "Thank you $name. Your application is recieved!";
 $message="
	Hi $name,<br>
	<p>Thanks for applying. We hope you have a wonderful journey with Smaya.</p>
	<p>Now your application will be read and if you get selected for interview, we will inform you.</p>
	<p>If you don't too, never worry. Every single person will get a mail stating where they can improve, so
							that you can apply once again. Smaya Innovation Club doors are always open.</p>
	<p> We dream of your success every single day.</p>
	<p> All the best. Take care.</p>
	<p><b>With loads of love and care,<br> Smaya.</b></p>
	<b style='text-decoration:underline'>Note</b>: To reply, just click Reply. Don't go by the email id. 
	Your message will be sent to smayainfo@gmail.com
	";
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers.= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers.="From:ceo@smaya.co"."\r\n"."Reply-To:smayainfo@gmail.com"."\r\n";
	if(mail($to,$subject,$message,$headers))
		echo "send";
	else
		echo "not";
}else{
	echo "not";
}

?>