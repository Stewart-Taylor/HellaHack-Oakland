<?php





?>



<div id="panel_container">

<div id="mood_box" class="cp_box">

<div class="cp_box_title"> Mood</div>

<div id="mood_icon_box">


<a href="#" id="mood_happy_button" class="mood_button">:)</a>
<a href="#" id="mood_neutral_button" class="mood_button">:|</a>
<a href="#" id="mood_sad_button" class="mood_button">:(</a>
</div>

</div>

<div id="energy_box" class="cp_box">

<div class="cp_box_title"> Energy</div>


  <script>
  $(function() {
    // setup master volume
    $( "#slider_energy" ).slider({
      value: 50,
      orientation: "horizontal",
      range: "min",
      animate: true
    });
	
	    $( "#slider_speach" ).slider({
      value: 50,
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


<div id="speech_box"class="cp_box">

<div class="cp_box_title"> Speech</div>

  <div class="slider_contatiner">
<div id="slider_speach"></div>
</div>
</div>

<button type="button" id="cp_button" class="construct_button">Construct Query</button>

</div>
