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
	
	<div id="songview">
	<?php
	include 'functions/songview.php';
	
	?>
	</div>
	
	
	</div>
	
  </body>
</html>
