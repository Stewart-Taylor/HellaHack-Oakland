

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


function getItemElement( title, artist, imageLink, audioLink, songData) {
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
 

var soundDate = songData.date ;
 
  var backItem = '<div class="playing_at">' + 'Playing at: <div class="artist_venue" >' + songData.venue  + "</div></div>";
 // backItem += '<div class="concert_date">' +  soundDate  + "</div>";
    backItem += '<div class="concert_city">' +  songData.city   + "</div>";
	backItem += '<a class="songkickLink" target="_blank" href="' + songData.link + '" >' +  '<img src="assets/images/songkick.png" width="20" height="20" >' + "</a>";
	backItem += '<div class="song_email"  >' +  '<img src="assets/images/mail.jpg" width="20" height="20" >' + "</div>";
  
  $(elem).append('<div class="flip-container" onclick="this.classList.toggle("hover");>' +  ' <div class="flipper">  <div class="front"> </div><div class="back">' +  backItem +  '</div></div> </div>');
  
  
$('.song_email').on("click", function() {
sendEmail(songData,title,artist);

})

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


function sendEmail(song , title , artist){

var base = 'http://sendgrid.com/api/mail.send.json?toname=Paul&from=Reccy%40reccy.com&api_user=iwozzy&api_key=hellareccy';

var subject = '&subject=Reccy:%20' + encodeURIComponent(title);
var body = '&text=You%20favourited%20this%20song%20on%20reccy' + + String.fromCharCode(13) + encodeURIComponent(artist); 

var email = '&to=' + 'wozniak.paull%40gmail.com';

 //sendgrid.com/api/mail.send.json?to=wozniak.paull%40gmail.com&toname=Paul&from=lol%40reccy.com&subject=Hey&text=what%20up%20dawg&api_user=iwozzy&api_key=hellareccy

 
 
 var emailURL = base + email + subject + body;
 
 
 //emailURL = encodeURIComponent(emailURL);
 
 console.log(emailURL);
 
 
 $.ajax({
  url: emailURL,
  context: document.body
}).done(function() {
 // $( this ).addClass( "done" );
});


}

/*
$(document).ready(function() {
   $('.song_email').click(function(){
   console.log("Ere");
   // sendEmail(songData, title , artist);
});
});
*/



