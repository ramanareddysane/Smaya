<!DOCTYPE html>
<html lang="en">
	<head> 
		<title>Smaya - Innovation Club</title>
		<link rel="icon" href="http://www.smaya.co/fevi.png" type="image/png" sizes="16x16">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<link rel="stylesheet" href="testcss.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'>
		<meta name="keywords" content="  ">
		<meta name="description" content="  " >
		<script src="jquery-1.11.3.min.js"></script>
		
		<script src="testjs.js"></script>
	</head>
	<body>
	<script type="text/javascript">
		if (screen.width <= 780) {
			document.location = "http://m.smaya.co/InnovationClub.php";
			javascript_abort();
			var s=document.getElementsByTagName("body").innerHTML="to mobile";
			alert(s);		
		}
		</script>
		<div id="total">			
			<div id="head"> 
				<div id="mquote">&ldquo;Passionate people need a little exposure, a little inspiration to change the world, we believe.&rdquo; </div>
			</div>
			<blockquote class="quote"><p> We believe every single person is exceptional, gifted 
			with a talent, have a passion, fight for a dream. Most of them lack 
			exposure. We want to change that.</p> </blockquote>	
			<blockquote class="quote"> <p>  Smaya Innovation Club is a place where people get to present their talents and 
			passion, a place where people fulfill their dreams. We are committed in making this a better world.</p></blockquote>	
			
			<div id="apply">
					<p>  Smaya entered into a joint venture with JNTUCE Anantapur,
					it'll expand to other colleges soon. If you are from JNTUA, enter your admission number and hit apply</p>
					<input id="admissionno" placeholder="eg.13001A0420"</input>
					<button id="applybtn" type="button">Apply</button>					
			</div>
			 <div id="background"></div> 
			<div id="form">	
					<img id="close" src="17.png"/>
					
					<div id="headings">
						<div id="ideas"  class="head"><span>Ideas</span></div>
						<div id="people" class="head"><span>People</span></div>
						<div id="qandf"  class="head"><span>Questions & Feedback</span></div>
					</div>
					
					<form id="ideaform" class="formarea">
						<div id="what" class="lable">	
							<span>What's your idea? What problem you are solving? What is the solution you propose?</span><br>
							<span style="opacity:0.5;padding:25px">eg: Decline in human interactions is a major problem world is ignoring. Smaya is solving that problem</span><br><br>
							<div style="text-align:left;"><textarea id="ideatext" placeholder="Your Answer" cols="60" rows="5" maxlength="500" required></textarea></div>
						</div> 
						<div id="who" class="lable">		
							<span> Who are your customers? Whom you are serving?</span><br>
							<span style="opacity:0.5;padding:25px">eg: Students,Farmers etc</span><br><br>						 	
							<div style="text-align:left;"><textarea  id="customertext" placeholder="Your Answer" cols="60" rows="3" maxlength="500" required></textarea></div>
						</div> 
						<div id="bmodel" class="lable">
							<span> What is your Buisiness Model? Buisiness model in the sense how you will earn money?</span><br>
							<span style="opacity:0.5;padding:25px">eg: Google earns money through dedicated search results, advertaising etc. </span><br>
							<div style="text-align:left;" ><textarea id="bmtext" placeholder="Your Answer" cols="60" rows="5" maxlength="500" required></textarea></div>
						</div>
						<div id="ideaextrainfo" style="font-size:17px">
							Name: <input placeholder="name" id="name"  required/><br><br>
							Email: <input type="email" placeholder="email" id="email" required/><br><br>
							Phone: <input type="tel" placeholder="Mobile number" id="phone" required/>
						</div>	
						<input id="ideasubmit" class="submit" value="submit" type="submit"></input>
					</form>
					
					
					<form id="peopleform" class="formarea">
						<div id="passion" class="lable">
							<span>What is your passion(Your talent)?</span><br>
							<span style="opacity:0.5;padding:25px"> eg: It can be anything. Just anything. May be related to <b>Academics</b> or 
								some great hobbies like <b>Photography</b>, <b>Music</b>, <b>Direction</b> etc.</span><br><br>
							<div style="text-align:left;" ><textarea id="passiontext" placeholder="Your Answer" cols="60" rows="2" maxlength="500" required></textarea></div>
						</div>
						<div id="work" class="lable">
							<span>What exactly have you done or doing for your passion? </span><br>
							<span style="opacity:0.5;">Share your work or say something about it like <i>I have learnt music</i> or <i>I won prize in xyz compitition</i> etc.</span><br><br>
							<div style="text-align:left;" ><textarea id="worktext" placeholder="Your Answer" cols="60" rows="5" maxlength="500" required></textarea></div>
							<span style="opacity:0.8;font-size:12px"><i>**</i>As for now, you can send your media files to 
									<a style="cursor:pointer;font-size:14px" href="https://mail.google.com/mail/u/0/?view=cm&tf=1&to=smayainfo@gmail.com&cc&bcc&su&body&fs=1" target="_blank" 
									title="smayainfo@gmail.com">email</a> provided to you with necessary details or You can just give it to us personally<i>**</i>
							</span>
						</div>
						<div id="helpsmaya" class="lable" >
							<span>How exactly do you feel your passion or talent helps Smaya?</span><br><br>
							<div style="text-align:left;" ><textarea id="helpsmayatext" placeholder="Your Answer (Optional, but definitely helps)" cols="60" rows="5" maxlength="500" ></textarea></div>
						</div>
						<div id="peopleextrainfo" style="font-size:17px">
							Name:&nbsp&nbsp<input placeholder="full name" id="peoplename"  required/><br><br>
							Email: &nbsp&nbsp<input type="email" placeholder="eg:abc@mailserver.com" id="peopleemail"  required/><br><br>
							Phone: <input type="tel" placeholder="Mobile number" id="peoplephone" required/>
						</div>
						<input id="peoplesubmit" class="submit" type="submit" value="send"></input>
					</form>
					
					
					<form id="qandfform" class="formarea">
						<div id="qandfbox" class="lable">
							Name: <input placeholder="name" id="qfname" style="width:100%"  required/><br><br>
							Email: <input type="email" placeholder="email" id="qfemail" style="width:100%" required/><br><br>		
							<div style="text-align:left;" ><textarea id="qandftext" placeholder="Ask your question or Give us a feedback" 
															  style="padding:10px" cols="60" rows="8" maxlength="500" required></textarea>
							</div>
							<input type="submit" class="submit" value="submit" id="qandfsubmit"/>	  
						</div>
					</form>
			</div>
			
			<div style="width:400px;height:212px"></div> 
		
		</div>
	</body>
</html>	