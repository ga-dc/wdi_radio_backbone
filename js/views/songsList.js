App.Views.SongsList = Backbone.View.extend({

	el: "#library",

	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderOne);
		this.listenTo(this.collection, 'reset', this.renderAll);
	},

	renderOne: function(song) {
		var view = new App.Views.Song({ model: song});
		this.$el.prepend(view.$el);
	},

	renderAll: function() {
		this.$el.empty();
		this.collection.each(this.renderOne.bind(this));
	}

})