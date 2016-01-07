App.Views.Song = Backbone.View.extend({

	className: 'song',

	events: {

		"click .edit" 	: "renderEditForm",
		"click .close" 	: "closeEditForm",
		"click .submit" : "submitEditForm",
		"click .delete" : "deleteSong",
		"click .song"		: "startPlayer"
		// "click .song" : "showPlayer"

	},

	startPlayer: function() {
		console.log(this.model);
		var player = new App.Views.Player({ model: this.model })
	},

	renderEditForm: function() {
    this.$el.html( this.formTemplate( this.model.toJSON() ));
    $(".edit-song-modal").show();
    console.log(this)
	},

	closeEditForm: function() {
  	this.render();
	},

	submitEditForm: function() {
		event.preventDefault();
    var data = {
      artist: $("#edit-song-artist").val(),
      title: $("#edit-song-title").val(),
      genre: $("#edit-song-genre").val(),
      audio_url: $("#edit-song-audio-url").val(),
      album_art: $("#edit-song-album-art").val()
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
    // this.listenTo(this.model, 'change', this.render);
    this.render();
	},

	// sorting: function(everySong) {
 //    everySong.sort(function(obj1, obj2) {
 //    	return obj1.id - obj2.id;
 //    })
 //  },

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ));
    $('#library').append(this.$el);
	}
});