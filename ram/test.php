<?php 
$username = "smayathq_smaya";
$password = "smaya";

// Create connection
	$conn = new mysqli("localhost", 'smayathq_smaya', 'smaya' ,'smayathq_test');

// Check connection
if ($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}$res=mysqli_query($conn,"select * from reg order by hmn_id desc");
 while($row=mysqli_fetch_assoc($res))
 {
	echo "<b>email:</b> ".$row['hmn_email']."<br>";
	echo "<b>name</b> ".$row['hmn_name']."<br>";
	echo "<b>NickName:</b> ".$row['hmn_alt']."<br>";
	echo "<br> ";
 }
?>