<?php
 $cat=$_REQUEST['cat'];
 $conn=new mysqli("localhost","root","","mydb");
 if(!$conn)
	 die("connection failed".mysqli_connect_error());
 $sql="select * from posts where post_cat='$cat' order by id desc "; 
 $result=mysqli_query($conn,$sql);	 
 if(mysqli_num_rows($result)==0){
	 echo "no posts yet";
 }else{
	 $query="select * from posts where post_cat='$cat' order by id desc limit 5";
	 $result=mysqli_query($conn,$query);
	 while($row=mysqli_fetch_assoc($result)){	
		$name=$row['post_by'];
		$old="c".$row['id'];
		if($field=mysqli_fetch_assoc(mysqli_query($conn,"select design from user where uname='$name'"))){
			$designation=$field['design'];
		}	 
		?>
			<li class="post-item" >
			<div class="total_post" id=<?php echo $row['p_id'];?> >
			<!-- post information -->
			<div class="info">
					<img src=getimage.php?name=<?php echo $row['post_by']; ?> style="border-radius:50%;height:3.75rem;width:3.75rem"> 
					<span class="name" ><b><?php echo $row['post_by']; ?></b>,</span>
					<span><i class="designation" > <?php echo $designation ?> </i> </span> 
					<span class="time_of_post"><?php echo $row['post_time'] ?></span> 
			</div>
			<!-- post and comment box -->
			<div class="post_comment"> 
				<div  class="post_text_container">
					<p> <?php echo $row['post_content']; ?>  </p>
				</div>	
				<div class="showmore"> show </div>		
				<ol class="comments-list" id=<?php echo $old ?> >
					<?php 
						$pid=$row['p_id'];
						$sql="select * from comments where post_under='$pid'";
						$res=mysqli_query($conn,$sql);
						if(mysqli_num_rows($res)!=0){
							?>
						 <script>
								$(document).ready(function(){
									var p_id='<?php echo $pid;?>';
									var c_id='<?php echo $old; ?>';
 									$.post("getcomments.php",{pid:p_id})
									.done(function(data){
										 	$('ol').each(function(){ 
											var id=$(this).attr('id');
											if(id==c_id){
												$(this).prev().show();
												$(this).prepend(data);
												$(".comment_item").hide();
												// alert(ol.attr('id'));
												return;
											}
										});
									});
								});
							</script>
							<?php 
						}	
					?>
					<li>
						<div class="comment"> 								
							<img  class='cmg' src="1.gif">
							<textarea class="cmnt" placeholder="comment here......." ></textarea>					
							<span><i>by</i></span>
							<input class="ram" placeholder="name"></input>
							<button class="cmntb"> <b><i>shout</i></b> </button>
						</div>
					</li>
				</ol>						
			</div>	
		</div>
		</li>
		
		<?php 
	 }
 } 
 ?>