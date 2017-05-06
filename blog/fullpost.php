<?php 
	include 'time_stamp.php';
	 $postid=$_REQUEST['id'];
	$con=new mysqli('localhost','smayathq_smaya','smaya','smayathq_test');
	if(!$con){
		die("Some thing went wrong please again later. The error is ".mysqli_connect_error());	
	}
	$sql="SELECT  * FROM blog where p_id="."'$postid'";
	if(mysqli_query($con,$sql)){
	$res=mysqli_query($con,$sql);
	while($row=mysqli_fetch_assoc($res)){
	  $pid=$row['p_id']; 
	  $phead=$row['p_head'];	
	  $time=$row['p_timestamp'];
	  $cont=$row['p_html'];
	  $smp=str_replace('</p>',' ',str_replace('<p>','',str_replace('<br>',', ',$cont)));
	}
?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta property="og:title" content=<?php echo "\"".$phead."\""?> />

<meta property="og:image" content="http://www.smaya.co/fevi.png" />
<meta property="og:image:width" content="450" />
<meta property="og:image:height" content="450" />
<meta property="og:description" content=<?php echo "\"".substr($smp,0,523)."\"..." ?>/>
<link rel="stylesheet"  href="css/blogcss.css">
<title>Smaya - blog </title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/full.js"> </script>
<script src="js/jq.js"> </script>
<link rel="icon" href="fevi.png" type="image/png" sizes="16x16">
<script src="jquery.fittext.js"></script>	
	</head>
	<body>			 
		<script>
		 window.fbAsyncInit = function() {
    FB.init({
      appId      : '933363526722559',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
		</script>
		<div class="mainheader">
			<img class="logo" src="images/logo.png" alt="logo" title="smaya">
			<img id="first" src="images/first.png" alt ="some thing" />
			<img id="second" src="images/second.png" style="display:none" alt ="some thing" />	
			<button class="altfb" style="top: 6%;background-image: url(images/altfb.png);background-size: 81px;background-repeat: no-repeat;
			background-position:-2px -3px;height: 29px;width: 72px;border-radius: 4px;">		
			</button>
		</div>
		
		<div class="main-article" >
			<div class="middle" id=<?php echo $pid; ?>>
				<div class="head">
					<img src="fevi.png" class="art">
					<header class="get" style="font-weight:100;font-size:22px;cursor:none;"> <?php echo $phead;?> </header>
					<h6 style="font-family:cursive;font-weight:100;"><?php time_stamp($time) ?></h6>
				 </div>  
				<article class="content"><?php echo $cont ?></article>
				<div class="share">
					<img  id="fbs"  src="images/f.png" class="sh">
					<img  id="gps"  src="images/gp.png" class="sh">
					<img  id="twt" src="images/twt.png" class="sh">
				</div>
			</div>
			
	<?php		
	}		
	?>
		</div>
		
	<div class="right">
			<div class="fb-like" id="asd" 
						data-href="https://www.facebook.com/smayacompany" 
						data-width="230px" data-layout="standard" data-action="like" data-show-faces="true" data-share="true">
			</div>
	</div>

	</body>

</html>