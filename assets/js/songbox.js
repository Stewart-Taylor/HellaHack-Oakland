

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
  
  
  
    var fragment = document.createDocumentFragment();
   // for ( var i = 0; i < 3; i++ ) {
      var elem = getItemElement();
      fragment.appendChild( elem );
      masonry_elms.push( elem );
   // }
    // prepend elements to container
    container.insertBefore( fragment, container.firstChild );
    // add and lay out newly prepended elements
    msnry.prepended( masonry_elms );
}


function getItemElement() {
  var elem = document.createElement('div');
  elem.className = 'block_song_container';
  return elem;
}
