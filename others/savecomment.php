<?php 
	$puid=$_REQUEST['under'];
	$content=$_REQUEST['content'];
	$by=$_REQUEST['by'];
	//echo "$puid,$by,$content";
	$time= date(' jS  F l Y h:i:s A');
	$conn=new mysqli("localhost","root","","mydb");
	if(!$conn)
		die("connection failed".mysqli_connect_error());
	$sql="insert into comments values('','','$puid','$content','$by','$time')";
	if(mysqli_query($conn,$sql)){
		$tid=mysqli_insert_id($conn);
		$cid="c".$tid;
		mysqli_query($conn,"update table comments set c_id='$cid' where cid='$tid'");
		?>
		<li >
			<div class="comment_item"  id=<?php echo $cid; ?> > 
				<div class="comment_info">
					<img class='cmg' src=getimage.php?name=<?php echo $by; ?> >
					<div style="color:white;padding-left:0.625rem;font-size:90%">
						<i style="color:white"> <?php echo $by; ?> </i><br>				
						<i> <?php echo $time; ?> </i><br>
					</div>
				</div>
				<p> 
					<?php echo $content; ?>	
				</p>
			</div>
		</li>
	<?php
	}else
		echo mysqli_error($conn);
	
	
	mysqli_close($conn);
?>