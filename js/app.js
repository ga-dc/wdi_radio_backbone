App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {

	window.songs = new App.Collections.Songs();
	
	songs.fetch().then(function() {
		everySong = [];
		songs.models.forEach( function(song){
			var songView = new App.Views.Song({ model: song })
		})
	})

	songs.comparator = 'artist';
  songs.sort();
  $("[name='sort-by']").on('change', function() {
  	songs.comparator = this.value;
  	songs.sort();
  	App.Views.Song.render();
  });

});
