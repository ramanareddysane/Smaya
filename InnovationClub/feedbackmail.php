<?php 
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$feedback=$_REQUEST['feed'];
 $adno=$_REQUEST['adno'];
	$con = new mysqli("localhost", 'smayathq_smaya', 'smaya' ,'smayathq_test');
if ($con->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
  $query="insert into feedback values('','$name','$email','$feedback','no')";
 if(mysqli_query($con,"insert into feedback values('','$name','$email','$feedback','no')")){

	 $id=mysqli_insert_id($con);
 } 
  $to = "smayainfo@gmail.com";
 $subject = "$name($adno) has given a feedback.";
 $message ="<h3>feedback:</h3><p>$feedback<p>";

 $headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From:ceo@smaya.co'. "\r\n".'Reply-To:'.$email."\r\n";

if(mail($to,$subject,$message,$headers)){
  	mysqli_query($con,"update feedback set feed_del_report='yes' where feed_id=$id");
	echo "send";
}else{
	echo "not";
}

?>