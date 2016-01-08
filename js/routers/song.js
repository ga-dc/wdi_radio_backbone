App.Routers.Song = Backbone.Router.extend({
	
	routes: {
		'': 'index',
		'new' 	: 'new',
		'player/:id'		: 'player'
	},

	initialize: function() {
   App.Collections.songs = new App.Collections.Songs();
   App.Views.songsList = new App.Views.SongsList({collection: App.Collections.songs});
   App.Views.songCreate = new App.Views.SongCreate({collection: App.Collections.songs});
	},

	index: function() {
		App.Collections.songs.fetch();
	},

	new: function() {
		App.Collections.songs.fetch();
		App.Views.songCreate.openNew();
	},

	player: function(id) {
		console.log(id)
		App.Collections.songs.fetch().then(function() {
			var view = App.Views.songsList.findSong(id);
			view.showPlayingSong();
			console.log('ho')
		});
	}

});