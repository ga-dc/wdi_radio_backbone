App.Views.SongsList = Backbone.View.extend({

	el: "#library",

	views: [],

	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderOne);
		this.listenTo(this.collection, 'reset', this.renderAll);
	},

	renderAll: function() {
    App.Routers.song.navigate('');
		this.$el.empty();
		this.collection.each(this.renderOne.bind(this));
	},

	renderOne: function(song) {
		var view = new App.Views.Song({ model: song});
		this.views.push(view);
		this.$el.prepend(view.$el);
	},

	findSong: function(id) {
		for (var i = 0; i < this.views.length; i++) {
      if (this.views[i].model.get("id") == id) {
        view = this.views[i];
      }
    }
    console.log('findSong')
    return view;
	}

})