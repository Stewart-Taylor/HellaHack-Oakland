

function addSongBox(title, artist,audioLink,imageLink, songData)
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

       var elem = getItemElement(title,artist,imageLink, audioLink ,songData);
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


function getItemElement( title, artist, imageLink, audioLink , songData) {
  var elem = document.createElement('div');
  
  var n = Math.random();
  
  elem.className = 'block_song_container_10';
  if(n < 0.1)
  {
  elem.className = 'block_song_container_1';
  }
   else if(n < 0.2)
  {
  elem.className = 'block_song_container_2';
  }
     else if(n < 0.3)
  {
  elem.className = 'block_song_container_3';
  }
     else if(n < 0.4)
  {
  elem.className = 'block_song_container_4';
  }
 

  
  
  $(elem).css("background-image", "url(" + imageLink + ")");  
  
  $(elem).append( '<div class="block_song_title">' +  title + '</div>' );
  
  $(elem).append( '<div class="block_song_artist">' + artist + '</div>' );
  
  console.log("sup");
  songData = JSON.parse(songData);
  console.log(songData);
  
  var backItem = '<div class="playing_at">' + "Playing at: " + songData.venue  + "</div>";
  backItem += '<div class="concert_date">' +  songData.date   + "</div>";
    backItem += '<div class="concert_city">' +  songData.city   + "</div>";
	backItem += '<a class="songkickLink" target="_blank" href="' + songData.link + '" >' +  '<img src="assets/images/songkick.png" width="20" height="20" >' + "</a>";
  
  $(elem).append('<div class="flip-container" onclick="this.classList.toggle("hover");>' +  ' <div class="flipper">  <div class="front"> </div><div class="back">' +  backItem +  '</div></div> </div>');
  
  
  
  

  $(elem).on("click", function() {
      var source = document.getElementById("audioSource");
      source.src = audioLink;
      var myAudio = document.getElementById("myAudio");
      myAudio.load();
      myAudio.play();
      
  })
  
  $(elem).children('.block_song_artist').css('visibility', 'hidden');
  $(elem).children('.block_song_title').css('visibility', 'hidden');
  $(elem).css('cursor', 'hand');
  $(elem).css('cursor', 'pointer');
  
  $(elem).mouseover(function()
  {
		$(elem).children('.block_song_artist').css('visibility', 'visible');
		$(elem).css('cursor', 'hand');
  });
  
    $(elem).mouseleave(function()
  {
		$(elem).children('.block_song_artist').css('visibility', 'hidden');
		$(elem).css('cursor', 'pointer');
  });
  
    $(elem).mouseover(function()
  {
		$(elem).children('.block_song_title').css('visibility', 'visible');
		$(elem).css('cursor', 'hand');
  });
  
    $(elem).mouseleave(function()
  {
		$(elem).children('.block_song_title').css('visibility', 'hidden');
		$(elem).css('cursor', 'pointer');
  });
  
  return elem;
}

