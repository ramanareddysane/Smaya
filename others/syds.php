<html>
<head>
	<title>Smayan's world</title>
	<meta name="viewport" content="width=devoce-width, initial-scale=1">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="jquery-1.11.3.min.js"> </script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	<script src="js/onload.js"></script>
	<script src="js/post.js"></script>
	<script src="js/commment.js"></script>
	<script src="js/moreposts.js"></script>
	<link rel="stylesheet" type="text/css" href="css/sydsstyle.css">
	<link rel="stylesheet" type="text/css" href="css/post.css">
		<link href='http://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
</head>
<body style="overflow:none;font-family:'Quicksand'">
<header >

</header>
<!-- postcircle -->	
<div id="postcircle" >
	<b>want to post</b>
</div>
	<!--categories to choose-->
	<div class="cat_section" >
			<div id="default" > default</div>
			<hr width='80%'>
			<p style="color:white;font-size:1.563rem;">go for specific one</p>
			<hr width="80%"> 
			<div class="list"><a>Aapi</a></div>
			<div class="list"><a>Bands</a></div>
			<div class="list"><a>Sensors </a></div>
			<div class="list"><a>Main Parts </a></div>
			<div class="list"><a>Extra Fittings</a> </div>
			<div class="list"><a>Laser Projector</a> </div>
			<div class="list"><a>Laser Keyboard</a></div>
			<div class="list"><a>Miscellaneous</a></div>
	</div>
	<!-- actual posts -->
	<div id="posts_section" >
		<ul style="list-style:none;padding:0.9375rem;margin:0rem;" >
		</ul>
	</div>
	<!-- background tag -->
<div class="pst bkg" >
</div>
<!-- poat form -->
<div id="postform"  class="pst" >
	<img src="c.png" id="close">
	<div id="div1"> </div>
	<input id="txtname"> </input>
	<div id="imd"> </div>
	<select id="sel">
		<option value="1">select a category</option>
		<option value="Sensors">Sensors</option>
		<option value="Laser Projector">Laser Projector</option>
		<option value="Laser Keyboard">Laser Keyboard</option>
		<option value="Aapi">Aapi</option>
		<option value="Bands">Bands</option>
		<option value="Main Parts">Main Parts</option>
		<option value="Extra Fittings">Extra Fittings</option>
		<option value="Miscellaneous">Miscellaneous</option>
	</select>	
	<textarea id="posttext" ></textarea>
	
	<button id="postb" > post</button>
</div>
</body>
</html>