App.Views.Song = Backbone.View.extend({

	className: 'song',

	events: {

		"click .edit" : 	"renderEditForm",
		"click .close" : 	"closeEditForm",
		"click .submit" : "submitEditForm",
		"click .delete" : "deleteSong"
		// "click .song" : "showPlayer"

	},

	renderEditForm: function() {
    this.$el.html( this.formTemplate( this.model.toJSON() ));
    $("#new-song-modal").show();
	},

	closeEditForm: function() {
  	this.render();
	},

	submitEditForm: function() {
		event.preventDefault();
    var data = {
      artist: $("#new-song-artist").val(),
      title: $("#new-song-title").val(),
      genre: $("#new-song-genre").val(),
      audio_url: $("#new-song-audio-url").val(),
      album_art: $("#new-song-album-art").val()
    }
    this.model.save(data);
	},

	deleteSong: function() {
		this.model.destroy();
    this.$el.fadeOut()
	},

	// showPlayer: function() {
	// 	console.log('click')
	// 	this.$el.html( this.template( this.model.toJSON() ));
	// 	$('#player-section').append(this.$el);
	// },

	initialize: function() {
		this.template = Handlebars.compile($("#songTemplate").html());
		this.formTemplate = Handlebars.compile($("#songForm").html());
    this.listenTo(this.model, 'change', function() {
    	this.$el.html( this.template( this.model.toJSON()));
    });
    this.render();
	},

	sorting: function(everySong) {
    everySong.sort(function(obj1, obj2) {
    	return obj1.id - obj2.id;
    })
  },

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ));
    $('#library').append(this.$el);
	}
});