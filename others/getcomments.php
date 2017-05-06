<?php 
	$pid = $_REQUEST['pid'];
	$con=new mysqli("localhost","root","","mydb");
	if(!$con)
		die("connection failed".mysqli_connect_error());
	$sql="select * from (select * from comments where post_under='$pid' order by cid desc limit 3 ) as r order by cid asc";
	$resul=mysqli_query($con,$sql);
	// echo mysqli_num_rows($result);
	if($resul){
	  while($row=mysqli_fetch_assoc($resul)){
		?>
		<li >
			<div class="comment_item"  id=<?php echo $row['c_id']; ?> > 
				<div class="comment_info">
					<img class='cmg' src=getimage.php?name=<?php echo $row['cmnt_by']; ?> >
					<div style="color:white;padding-left:0.625rem;font-size:90%">
						<i style="color:white"> <?php echo $row['cmnt_by']; ?> </i><br>				
						<i> <?php echo $row['cmnt_time']; ?> </i><br>
					</div>
				</div>
				<p> 
					<?php echo $row['cmnt_content']; ?>
				</p>
			</div>
		</li>
		
		<?php 
		} 
		
	}
	 mysqli_close($con);
?> 
