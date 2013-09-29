<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hella Hack</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.12.0/build/cssreset/cssreset-min.css">
    <link href="assets/css/style.css" rel="stylesheet">
	<link href="assets/css/control_panel.css" rel="stylesheet">
	<link href="assets/css/songview.css" rel="stylesheet">


		<script type="text/javascript" src="assets/js/jquery.js"></script>
			<script type="text/javascript" src="assets/js/control_panel.js"></script>



			<script type="text/javascript" src="assets/js/songview.js"></script>
			<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
			<link rel="stylesheet" type="text/css" href="assets/css/jquery-ui.css" media="all" />


    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">

	<div id="control_panel">
	<?php
	
	include 'functions/control_panel.php';
	
	?>
	</div>
	

	</div>
	
	<div id ="songviewCont">
	
		<div id="songview">
	<?php
	include 'functions/songview.php';
	
	?>
	</div>

	<div id="player">
		<?php
		include 'functions/player.php';
		?>	
	</div>

	</div>
	
  </body>
</html>
