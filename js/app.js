App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {

	var songs = new App.Collections.Songs();
	
	songs.fetch().then(function() {
		songs.models.forEach( function(song){
			var songView = new App.Views.Song({ model: song })
			// $("songs").append(songView.$el)
		})
	})

});
