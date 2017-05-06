<?php 

?>
<style>
body{
	-webkit-perspective:1300px;
	-webkit-perspective-origin: 0 100;
	width:100%;
	margin:auto;
}
 div {
	 text-align:center;
	 position:absolute;
	 left:300px;top:300px;
	 width:220px;
	 height:220px;
	 background:steelblue;
	 color:white;
	  border-radius:10%;
	 border:1px solid white;
	 transition: -webkit-transform 3s ease-in-out ;
	 
 }
 
 div:hover{
	 -webkit-transform:rotateX(270deg);
	 
 }
 
		
</style>
<div class="container">
		<header>
		<h1 id="fittext2">ramana</h1>
		</header>
</div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
 	<script src="jquery.fittext.js"></script>
	<script type="text/javascript">
		$("p").fitText(1.9, {minFontSize: '10px', maxFontSize: '30px'});
		// $("#fittext2").fitText(1.2);
		  // $("#fittext2").fitText(1);
	</script>
