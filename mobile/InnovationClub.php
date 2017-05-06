<!DOCTYPE html>
<html lang="en">
<head>
  
  <script type="text/javascript">
	if (screen.width >= 780) {	
		document.location = "http://innovationclub.smaya.co";
			// alert("bigrock");
			javascript_abort();		
	}
  </script>	
	
  <title>Smaya Innovation Club</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'>
  <meta name="keywords" content=" Nimi, Nimi band, social fitness wearable, Nimi hands free connection   ">
  <meta name="description" content=" Nimi band is a real social fitness wearable which helps in increasing Aapi world efficiency, hands free connection and stay fit as it is also a fitness tracker." >
  <link rel="icon" href="fevi.png" type="image/png" sizes="16x16">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="fit.js"></script>
  <script src="sic.js"></script>
  <link rel='stylesheet' type="text/css" href="css/home.css">  
</head>

<body>
	<?php include("nav.html"); ?>
	<img id="as" src="images/bgtop.gif"  class="img-responsive" >		
	<div id="imgtext">
		<p style="text-indent:2.5rem">&ldquo;Passionate people need a little exposure, a little inspiration to change the world, we believe.&rdquo; </p>	
	</div>
	<style>
		#imgtext{
			position:absolute;top:10%;color:white;
		}
	</style>
	
	<div class="row" style="margin:10px;">
		<li class="list-group-item">
			<p> We believe every single person is exceptional, gifted 
			with a talent, have a passion, fight for a dream. Most of them lack 
			exposure. We want to change that. </p>
			<p> Smaya Innovation Club is a place where people get to present their talents and 
			passion, a place where people fulfill their dreams. We are committed in making this a better world. </p>
		</li>
	</div>
	<div class="container">  	
		<div class="row" style="margin-bottom:50px;">
			<li class="list-group-item" style="font-family: cursive;font-size: 17px;">
			Smaya entered into a joint venture with JNTUCE Anantapur, 
			it'll expand to other colleges soon. If you are from JNTUA,
			enter your admission number and hit apply.
			</li><br>
				<div class="col-xs-12"><input id="admissionno"style="width:300px" class="form-control" placeholder="eg.13001A0420"</input></div><br><br>
				<div class="col-xs-12"><button id="applybtn" disabled style="opacity:0.5;color:white;background-color:#db6548;border:none;border-radius:10px;font-size:24px;" type="button">Apply</button></div>
			<br><br><br><div class="col-xs-12" style="display:none;" id="selection" >
					<select style="width:300px" id="select" class="form-control">
						<option>What do you have?</option>
						<option value="idea">Idea</option>
						<option value="people">Passion</option>
					</select>
				</div>
		</div>
	
		<div class="row formarea" id="ideaform" style="display:none;">
		  <h2>Idea</h2>
			<ul class="list-group">
				<li class="list-group-item" style="text-align:left">
					1.What's your idea? What problem you are solving? What is the solution you propose?<br>
					<span style="opacity:0.7">eg: Decline in human interactions is a major problem world is ignoring. Smaya is solving that problem</span><br>
					<textarea id="idea"  style="resize:none;" placeholder="Your Answer" cols="40" rows="4" maxlength="500" ></textarea>
					<span style="color:brown"></span>
				</li>
				<li class="list-group-item" style="text-align:left">
					2.Who are your customers? Whom you are serving?<br>
					<span style="opacity:0.7">eg: Students, Farmers etc.,</span><br>
					<textarea id="customers"  style="resize:none;" placeholder="Your Answer" cols="40" rows="4" maxlength="500" ></textarea>
					<span style="color:brown"></span>
				</li>
				<li class="list-group-item" style="text-align:left">
					3.What is your Buisiness Model? Buisiness model in the sense how you will earn money?<br>
					<span style="opacity:0.7">eg: Google earns money through dedicated search results, advertaising etc. </span><br>
						<textarea id="bm"  style="resize:none;" placeholder="Your Answer" cols="40" rows="4" maxlength="500" ></textarea>
					<span style="color:brown"></span>
				</li>
				<li class="list-group-item" style="text-align:left">
					4.<lable>Name:</lable><br><input placeholder="full name" style="width:290px" type="text" id="ideaname"/> <br>
				</li>
				<li class="list-group-item" style="text-align:left">
					5.<lable>Email:</lable> <br><input  style="width:290px" placeholder="email" type="email" id="ideaemail"/><br>
				</li>
				<li class="list-group-item" style="text-align:left">
					6.<lable>Phone:</lable><br> <input style="width:290px;"  placeholder="mobile number" id="ideaphone"/>
				</li>
				<li style="text-align:center">
					<br>
					<button style="background:#E77346;border:none;color:white;border-radius:10px;font-size:29px;" id="ideasubmit">submit</button>
				</li>
			</ul>	
		</div>
		
		<div class="row formarea" id="peopleform" style="display:none">
			<h2>People</h2>
			<ul class="list-group">
				<li class="list-group-item" style="text-align:left">
					1.What is your passion(Your talent)?<br>
					<span style="opacity:0.7"> eg: It can be anything. Just anything. May be related to Academics or some great hobbies like Photography, Music, Direction etc.</span><br>
				<br><textarea id="passion"  style="resize:none;" placeholder="Your Answer" cols="40" rows="4" maxlength="500" ></textarea>
					<span style="color:brown"></span>
				</li>
				<li class="list-group-item" style="text-align:left">
				2.What exactly have you done or doing for your passion?<br>
					<span style="opacity:0.7">Share your work or say something about it like I have learnt music or I won prize in xyz compitition etc.</span>
					<textarea id="workdone"  style="resize:none;" placeholder="Your Answer" cols="40" rows="4" maxlength="500" ></textarea>
					<span style="color:brown"></span>
				</li>
				<li class="list-group-item" style="text-align:left">
				3.How exactly do you feel your passion or talent helps Smaya?<br><br>
					<textarea id="helpsmaya"  style="resize:none;" placeholder="Your Answer" cols="40" rows="4" maxlength="500" ></textarea>
					<span style="color:brown"></span>
				</li>
				<li class="list-group-item" style="text-align:left">
					4.<lable>Name:</lable><br><br><input placeholder="full name" style="width:290px" type="text" id="peoplename"/> <br>
				</li>
				<li class="list-group-item" style="text-align:left">
					5.<lable>Email:</lable> <br><br><input  style="width:290px" placeholder="email" type="email" id="peopleemail"/><br>
				</li>
				<li class="list-group-item" style="text-align:left">
					6.<lable>Phone:</lable><br><br> <input style="width:290px;"  placeholder="mobile number" id="peoplephone"/>
				</li>
				<li style="text-align:center">
					<br>
					<button style="background:#E77346;border:none;color:white;border-radius:10px;font-size:29px;" id="peoplesubmit">submit</button>
				</li>
			</ul>
		</div>
		
	</div>
	
	<?php include("foot.php");?>
</body>

<script>
   $(".logo").attr("src","images/sic.png");
   $(".logo").css({'top':'-10px'});		
</script>