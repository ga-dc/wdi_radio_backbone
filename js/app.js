App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {

	// window.songs = new App.Collections.Songs();

  var songs = new App.Collections.Songs();
  var songsList = new App.Views.SongsList( {collection: songs} );
  songs.fetch({reset: true});
  new App.Views.SongCreate( {collection: songs} );
  // new App.Views.Player( {collection: songs} )

	
	// songs.fetch().then(function() {
	// 	everySong = [];
	// 	songs.models.forEach( function(song){
	// 		var songView = new App.Views.Song({ model: song })
	// 	})
	// })

	// songs.comparator = 'album';
 //  songs.sort();
 //  $("[name='sort-by']").on('change', function() {
 //  	songs.comparator = this.value;
 //  	songs.sort();
 //  	// App.Views.Song.render();
 //  });

});
