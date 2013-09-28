<?php





?>



<div id="panel_container">

<div id="mood_box" class="cp_box">

<div class="cp_box_title"> Mood</div>

<div id="mood_icon_box">

<div id="mood_happy" class="mood_emoteBox"> Happy</div>
<div id="mood_sad" class="mood_emoteBox"> Sad</div>
<div id="mood_angry" class="mood_emoteBox"> Angry</div>
</div>

</div>

<div id="energy_box" class="cp_box">

<div class="cp_box_title"> Energy</div>


  <script>
  $(function() {
    // setup master volume
    $( "#slider_energy" ).slider({
      value: 100,
      orientation: "horizontal",
      range: "min",
      animate: true
    });
    // setup graphic EQ
    $( "#eq > span" ).each(function() {
      // read initial values from markup and remove that
      var value = parseInt( $( this ).text(), 10 );
      $( this ).empty().slider({
        value: value,
        range: "min",
        animate: true,
        orientation: "vertical"
      });
    });
  });
  </script>
  
<div id="slider_energy"></div>

</div>


<div id="speech_box"class="cp_box">

<div class="cp_box_title"> Speech</div>
</div>

<button type="button" id="cp_button" class="construct_button">Construct Query</button>

</div>
