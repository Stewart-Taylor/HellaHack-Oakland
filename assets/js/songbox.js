

function addSongBox(title, artist,audioLink,imageLink)
{

   
   
    // prepend elements to container
   // container.insertBefore( fragment, container.firstChild );
    // add and lay out newly prepended elements
    //msnry.prepended( elems );

//		         var newItem = $('<div>').addClass("block_song_container").addClass('item').val('A');
	//	 var container = $('#song_container');
		  
		  
		//  masonry_elms.push( newItem );
		  
		  //  container.insertBefore( newItem, container.firstChild );
  // add and lay out newly prepended elements
  //msnry.prepended( masonry_elms );
  
  
  //console.log(masonry_elms);
  //console.log("msnry" + msnry);
   //title = "Sweet Nothing";
  // artist = "calvin harris";
  // imageLink = "http://www.josepvinaixa.com/blog/wp-content/uploads/2013/04/Calvin-Harris-I-Need-Your-Love-2013-1200x1200-Final-Version.png";
  
    var fragment = document.createDocumentFragment();

       var elem = getItemElement(title,artist,imageLink, audioLink);
      fragment.appendChild( elem );
      masonry_elms.push( elem );

    // prepend elements to container
    container.insertBefore( fragment, container.firstChild );
    // add and lay out newly prepended elements
   // msnry.prepended( masonry_elms );
   console.log("here");
   console.log(container.firstChild);
   console.log(msnry);
   console.log("Elem");
   console.log(elem);
   
   console.log(masonry_elms);
   console.log(msnry.items);
   msnry.prepended(elem);
   
   
}


function getItemElement( title, artist, imageLink, audioLink) {
  var elem = document.createElement('div');
  
  var n = Math.random();
  
  elem.className = 'block_song_container';
  if(n < 0.3)
  {
  elem.className = 'block_song_container_small';
  }
  
    if(n > 0.8)
  {
  elem.className = 'block_song_container_big';
  }
  
  $(elem).css("background-image", "url(" + imageLink + ")");  
  
  $(elem).append( '<div class="block_song_title">' +  title + '</p>' );
  
  $(elem).append( '<div class="block_song_artist">' + artist + '</p>' );

  $(elem).on("click", function() {
      var source = document.getElementById("audioSource");
      source.src = audioLink;
      var myAudio = document.getElementById("myAudio");
      myAudio.load();
      myAudio.play();
      
  })
  
  return elem;
}