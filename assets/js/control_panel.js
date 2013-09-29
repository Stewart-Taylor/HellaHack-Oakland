


var moodState = "happy";


$( document ).ready(function() {
$( "#slider_energy" ).slider({
  stop: function( event, ui ) 
  {
 // alert("test");
 constructQuery();
  }
});


$( "#slider_speach" ).slider({
  stop: function( event, ui ) 
  {
 // alert("test");
 constructQuery();
  }
});

});



$(function() {
      $("#cp_button").click( function()
           {
		  
		  
             constructQuery();
           }
      );
});

$(function() {
      $("#mood_happy_button").click( function()
           {
		   moodState = "happy";
		   constructQuery();
           }
      );
});

$(function() {
      $("#mood_neutral_button").click( function()
           {
		   moodState="neutral";
		   constructQuery();
           }
      );
});

$(function() {
      $("#mood_sad_button").click( function()
           {
		   moodState="sad";
		   constructQuery();
           }
      );
});



function constructQuery()
{	
	var site = 'http://developer.echonest.com/api/v4/song/search?api_key=F7R69ENQKKOFBKMBP&format=json';
	
	
	var results = '&results=' + 30;
	
	var mood = "&mood=" + moodState;
	
	var artistFame = "&artist_min_familiarity=" + Math.random();
	var live = "&min_liveness=" + Math.random();
	
	var energy = $('#slider_energy').slider("option", "value");
	energy = energy / 100;
	//console.log(energy);
	
	var speach = $('#slider_speach').slider("option", "value");
	speach = speach / 100;
	speach = '&max_speechiness=' + speach
	
	min_energy = '&min_energy=' + energy;

	//song_min_hotttnesss = '&song_min_hotttnesss=0.5'

	var artistStartYear = '&artist_start_year_after=2005';

	var styleArray = ['electronic', 'rock', 'folk', 'indie'];

	var randomNumber2 = Math.floor(Math.random()*styleArray.length);

	var style = '&style=' + styleArray[randomNumber2];

	var sortArray = ["tempo-asc","artist_hotttnesss-asc","tempo-desc","liveness-desc","artist_hotttnesss-desc","song_hotttnesss-desc","energy-desc"];
	
	var randomNumber = Math.floor(Math.random()*sortArray.length);

	var sort = '&sort=' + sortArray[randomNumber];

	var queryString = site + results + min_energy + mood + speach + artistStartYear + style + sort;
	
	//console.log(queryString);
	//alert(queryString);
	
	callEchoNest(queryString);
}



function callEchoNest(website)
{
	
		   $.ajax({
        url: "functions/proxy.php?url=" + encodeURIComponent(website),
        type: "get",
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR)
		{
		response = $.parseJSON(response);
		//console.log(response);
		generatePlaylist(response);
		
		},
        // callback handler that will be called on error
        error: function(jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.log(
                "The following error occured: "+
                textStatus, errorThrown
            );
        },
        // callback handler that will be called on completion
        // which means, either on success or error
        complete: function()
		{
            // enable the inputs
         //   $inputs.removeAttr("disabled");
        }
    });


}

function generatePlaylist(response) 
{
	var base = 'http://developer.echonest.com/api/v4/playlist/static?api_key=F7R69ENQKKOFBKMBP';

	//get the first song returned from the search
	var songID = '&song_id=' + response.response.songs[0].id;
	
	var format = '&format=json';

	var results = '&results=30';

	var type = '&type=song-radio';

	var queryString = base + songID + format + results + type;

	$.ajax({
	    url: "functions/proxy.php?url=" + encodeURIComponent(queryString),
	    type: "get",
	    // callback handler that will be called on success
	    success: function(response, textStatus, jqXHR)
		{
		response = $.parseJSON(response);
			//console.log(response);
			populateWindow(response);
		},
	    // callback handler that will be called on error
	    error: function(jqXHR, textStatus, errorThrown){
	        // log the error to the console
	        console.log(
	            "The following error occured: "+
	            textStatus, errorThrown
	        );
	    },
	    // callback handler that will be called on completion
	    // which means, either on success or error
	    complete: function()
		{
	        // enable the inputs
	     //   $inputs.removeAttr("disabled");
	    }
    });

}

//http://developer.echonest.com/api/v4/song/search?api_key=F7R69ENQKKOFBKMBP&format=json&results=10&min_tempo=180&style=electronic&min_energy=0.8
//http://developer.echonest.com/api/v4/playlist/static?api_key=F7R69ENQKKOFBKMBP&song_id=SOBNERE12AF72A2678&song_id=SOOAWPE13D71F2D713&format=json&results=10&type=song-radio