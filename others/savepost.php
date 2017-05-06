<?php
	$time= date(' jS  F l Y h:i:s A');
	$content= $_REQUEST['content'];
	$postby= $_REQUEST['by'];
	$category=$_REQUEST['cat'];  
	//echo $time;
	$conn=new mysqli("localhost","root","","mydb");
	if(!$conn)
	{
		die("connection failed : ".mysqli_connect_error());
	}	
	$query="insert into posts values('','','$postby','$category','$content','$time')";
	if(mysqli_query($conn,$query)){
		$id=mysqli_insert_id($conn);
		$pid="p".$id;
		mysqli_query($conn,"update posts set p_id='$pid' where id=$id");
		?>
		
		<li class="post-item"  style="list-style:none;border-bottom:0.125rem solid white;width:95%;height:auto;float:left;padding:0.125rem;margin-bottom:0.625rem;">
		<div class="total_post" id=<?php echo $pid;?> >
			<!-- post informaion -->
			<div class="post_info" style="width:14%;height:auto;float:left;margin-top:2%">
				<div class="info">
					<img src=getimage.php?name=<?php echo $row['post_by']; ?> style="border-radius:50%;height:3.75rem;width:3.75rem"> 
					<span class="name" ><b><?php echo $row['post_by']; ?></b>,</span>
					<span><i class="designation" > <?php echo $designation ?> </i> </span> 
					<span class="time_of_post"><?php echo $row['post_time'] ?></span> 
			</div>
			</div>
			<!-- post and comment box -->
			<div class="post_comment" align="justify" style="width:85%;float:left;height:auto;padding-top:2%"> 
				<div  class="post_text_container">
					<p> <?php echo $row['post_content']; ?>  </p>
				</div>
				<ol class="comments-list" style="padding:0rem;list-style:none;margin:0rem;margin-bottom:0.3125rem;">
					<li>
						<div class="comment"> 								
							<img  class='cmg' src="1.gif">
							<textarea class="cmnt" placeholder="comment here......." ></textarea>					
							<span><i>by</i><span>
							<input placeholder="name"></input>
							<button class="cmntb"> <b><i>shout</i></b> </button>
						</div>
					</li>
				</ol>			
			</div>	
		</div>
		</li>	

		<?php
	}
	mysqli_close($conn);
?>