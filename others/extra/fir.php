<?php
	$con=new mysqli("localhost","root","","mydb");
	
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "select * from myguests where id=13";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. " - Name: " 
		. $row["firstname"]. " " . $row["lastname"]." " . $row["reg_date"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($con);
?>