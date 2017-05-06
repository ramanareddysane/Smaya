<?php
	include 'time_stamp.php';
		$child=$_REQUEST['childs'];
	$con=new mysqli('localhost','smayathq_smaya','smaya','smayathq_test');
	if(!$con){
		die("Some thing went wrong please again later. The error is ".mysqli_connect_error());	
	}
	$sql="SELECT blog.id,blog.p_id,blog.p_head,blog.p_timestamp,blog.p_html from (select id from blog order by id DESC limit $child,3) o 
            JOIN blog ON blog.id=o.id order by blog.id desc";
	if(mysqli_query($con,$sql)){
		$res=mysqli_query($con,$sql);
		if(mysqli_num_rows($res)==0)
			echo '0';
		else
			while($row=mysqli_fetch_assoc($res)){
				?>
					<article class="middle" id=<?php echo $row['p_id'] ?>>
						
						  <div class="head">
							<img src="fevi.png" class="art">
							<header class="get" style="font-weight:100;font-size:22px;"> <span class=<?php echo $row['p_id'] ?> ><?php echo $row['p_head'] ?></span> </header>
							<h6 style="font-family:cursive;font-weight:100;"><?php  time_stamp($row['p_timestamp']) ?></h6>
						 </div>
						
						<article class="content"><?php echo substr($row['p_html'],0,522).'<a class=" sm get"><span class='.$row['p_id'].'><b> ...see more</b></span></a>' ?></article>
						<div class="share">
							<img  id="fbs"  src="images/f.png" class="sh">
							<img  id="gps"  src="images/gp.png" class="sh">
							<img   id="twt" src="images/twt.png" class="sh">
						</div>
					</article>
				<?php	
			}
	}		
?>
