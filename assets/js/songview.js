function populateWindow(responseObject) 
{
	console.log("HI!");

	$.each( responseObject.response.songs, function(i, item) {
		console.log(item.title);
	});
}