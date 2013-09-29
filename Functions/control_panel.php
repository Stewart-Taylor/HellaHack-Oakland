<?php





?>



<div id="panel_container">


<div id="logo_box">
<h1>Title</h1>
</div>

<div class="panel_divider"></div>

<div id="mood_box" class="cp_box">

<div class="cp_box_title"> Mood</div>

<div id="mood_icon_box">


<a href="#" id="mood_happy_button" class="mood_button">:)</a>
<a href="#" id="mood_neutral_button" class="mood_button">:|</a>
<a href="#" id="mood_sad_button" class="mood_button">:(</a>
</div>

</div>

<div class="panel_divider"></div>

<div id="energy_box" class="cp_box">

<div class="cp_box_title"> Energy</div>


  <script>
  $(function() {
  
  val = Math.random();
  val = val * 100;
  
    val2 = Math.random();
  val2 = val2 * 100;
  
    // setup master volume
    $( "#slider_energy" ).slider({
      value: val,
      orientation: "horizontal",
      range: "min",
      animate: true
    });
	
	    $( "#slider_speach" ).slider({
      value: val2,
      orientation: "horizontal",
      range: "min",
      animate: true
    });
  });
  </script>
  
  <div class="slider_contatiner">
<div id="slider_energy"></div>
</div>


</div>


<div class="panel_divider"></div>

<div id="speech_box"class="cp_box">

<div class="cp_box_title"> Speech</div>

  <div class="slider_contatiner">
<div id="slider_speach"></div>
</div>
</div>

<div class="panel_divider"></div>

<button type="button" id="cp_button" class="construct_button">Construct Query</button>

</div>
