<?php 
	$id=1;
	$s="p".$id; 
?>
<span id=<?php echo $s; ?>>raana</span>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<?php echo $str=substr($s,1); ?>
<script>
//$("#p1").attr('id',<?php echo $str?>);
alert($("#p1").text());
</script>
