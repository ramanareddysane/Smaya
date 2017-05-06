<?php
$to = "ramanareddysane@gmail.com";
$subject = "HTML email";
$message = "
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From:ceo@smaya.co'. "\r\n";
if(mail($to,$subject,$message,$headers)){
	echo "sent ";
}else {
	echo "notsent";
}

?>