function populateWindow(responseObject) 
{
	var site =  'http://developer.echonest.com/api/v4/song/search?api_key=F7R69ENQKKOFBKMBP&format=json'
	var results = '&results=1'
	var bucket = '&bucket=id:7digital-US&bucket=tracks'
	//var limit = '&limit=true'

	//console.log("HI!");

	$.each( responseObject.response.songs, function(i, item) {
		//console.log(item.artist_name);
		//console.log(item.title);

		var artist = '&artist=' + item.artist_name;
		var title = '&title=' + item.title;

		var queryString = site + results + artist + title + bucket; //+ limit;

		//console.log(queryString);
		callEchoNest7Digital(queryString);


	});
}

function callEchoNest7Digital(queryString)
{
	$.ajax({
        url: queryString,
        type: "get",
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR)
		{
			//console.log(response);
			parse7Digital(response);
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

function parse7Digital(response)
{
	//console.log("--START--");	
	var songs = response.response.songs[0];
	var track = songs.tracks[0];

	if(track == null) {
		
	} else {
		//console.log(songs.artist_name);
		//console.log(songs.title);
		//console.log(track.preview_url);
		//console.log(track.release_image);

		getArtistSongKickID(songs.artist_name, function(songKickID){
			getArtistEvents(songKickID, function(eventJSONObject){
				console.log(eventJSONObject);
				addSongBox(songs.title,songs.artist_name,track.preview_url,track.release_image,eventJSONObject);
			});

		});

	}
	
	//console.log("--FINISH--");
}

function getArtistSongKickID(artist_name, callback)
{
	var base = 'http://api.songkick.com/api/3.0/search/artists.json?query=';
	var search = artist_name
	var api = '&apikey=qnqepvaYb1LXkz0T'

	var queryString = base + search + api;

	var songKickID;

	$.ajax({
        url: queryString,
        type: "get",
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR)
		{
			songKickID = response.resultsPage.results.artist[0].id;
			callback(songKickID);

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

function getArtistEvents(artist_id,callback)
{
	var base = 'http://api.songkick.com/api/3.0/artists/';
	var artist = artist_id;
	var rest = '/calendar.json?apikey=qnqepvaYb1LXkz0T';

	var queryString = base + artist + rest;

	var eventObject = new Object();
	var eventJSONObject;

	$.ajax({
        url: queryString,
        type: "get",
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR)
		{
			eventObject.displayName = response.resultsPage.results.event[0].displayName;
			eventObject.date = response.resultsPage.results.event[0].start.date;
			eventObject.city = response.resultsPage.results.event[0].location.city;
			eventObject.venue = response.resultsPage.results.event[0].venue.displayName;
			eventObject.link = response.resultsPage.results.event[0].uri;

			eventJSONObject = JSON.stringify(eventObject);

			callback(eventJSONObject);

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
 			console.log(eventJSONObject);
        }
    });
}