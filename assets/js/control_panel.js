




$(function() {
      $("#cp_button").click( function()
           {
             constructQuery();
           }
      );
});



function constructQuery()
{	
	var site = 'http://developer.echonest.com/api/v4/song/search?api_key=F7R69ENQKKOFBKMBP&format=json';
	
	
	var results = '&results=' + 10;
	
	var mood = "happy";
	
	
	
	
	var energy = $('#slider_energy').slider("option", "value");
	energy = energy / 100;
	console.log(energy);
	
	mood = '&mood=happy';
	min_energy = '&min_energy=' + energy;
	


	var queryString = site + results + mood + min_energy;
	
	console.log(queryString);
	//alert(queryString);
	
	callEchoNest(queryString);
}


function callEchoNest(website)
{

		   $.ajax({
        url: website,
        type: "get",
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR)
		{
		console.log(response);

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