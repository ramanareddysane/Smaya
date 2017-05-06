<?php
 $name=$_REQUEST['name'];
 $email=$_REQUEST['email'];
 $idea=$_REQUEST['idea'];
 $customers=$_REQUEST['customers'];
 $bm=$_REQUEST['bm'];
 $phone=$_REQUEST['phone'];
$to = "smayainfo@gmail.com";
$subject = "$name has an idea.";
$message ="
<b>mobile no:</b>$phone<br><br>
<h3>Idea</h3>
<p>$idea<p>
<h3>Customers</h3>
<p>$customers<p>
<h3>Buisiness Model</h3>
<p>$bm<p>
";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From:ceo@smaya.co'. "\r\n".'Reply-To:'.$email."\r\n";
if(mail($to,$subject,$message,$headers)){
	$to = "$email";
	$subject = "Thank you $name. Your application is recieved!";
echo $message="
	Hi $name,<br>
	<p>Thanks for applying. We hope you have a wonderful journey with Smaya.</p>
	<p>Now your application will be read and if you get selected for interview, we will inform you.</p>
	<p>If you don't too, never worry. Every single person will get a mail stating where they can improve, so
							that you can apply once again. Smaya Innovation Club doors are always open.</p>
	<p> We dream of your success every single day.</p>
	<p> All the best. Take care.</p>
	<p><b>With loads of love and care,<br> Smaya.</b></p>
	<b style='text-decoration:underline'>Note</b>: To reply, just click Reply. Don't go by the email id. 
	Your message will be send to smayainfo@gmail.com
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