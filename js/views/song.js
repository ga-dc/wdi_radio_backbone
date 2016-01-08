App.Views.Song = Backbone.View.extend({

	className: 'song',

	events: {

		"click .edit" 	: "renderEditForm",
		"click .close" 	: "closeEditForm",
		"click .submit" : "submitEditForm",
		"click .delete" : "deleteSong",
		"click .song"		: "startPlayer",
	},

	initialize: function() {
		this.template = Handlebars.compile($("#songTemplate").html());
		this.formTemplate = Handlebars.compile($("#songForm").html());
    this.listenTo(this.model, 'change', function() {
    	this.$el.html( this.template( this.model.toJSON()));
    });
    this.render();
	},

	startPlayer: function() {
		var player = new App.Views.Player({ model: this.model })
	},

	renderEditForm: function() {
    this.$el.html( this.formTemplate( this.model.toJSON() ));
    $(".edit-song-modal").show();
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

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ));
    $('#library').append(this.$el);
	},

	showPlayingSong: function(id) {
		App.Routers.song.navigate('player/' + this.model.id)
		$("#library").html( this.template( this.model.toJSON()));
	},
	
});