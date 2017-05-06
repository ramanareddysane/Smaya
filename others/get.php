<?php 
	if($_REQUEST['name'])
	$val=$_REQUEST['name'];
	//$e=$_REQUEST['extra'];
	//echo $val;
	//connect to mysql server
	$con=new mysqli("localhost","root","","mydb");
	if(!$con)
		die("connection failed:".mysqli_connect_error());
	else {
		//echo "connect";
		$sql="select * from user where uname LIKE '$val%'";
		$result=mysqli_query($con,$sql);
		if(mysqli_num_rows($result)>0){
			while($row=mysqli_fetch_assoc($result)){
				$nam=$row['uname'];
				echo "<li class='loi'>$nam</li>";
			}
		}
	}
		
		
?> 