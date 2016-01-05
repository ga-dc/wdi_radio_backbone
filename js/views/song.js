App.Views.Song = Backbone.View.extend({

	className: 'song',

	events: {

		"click .edit" : 	"renderEditForm",
		"click .close" : 	"closeEditForm",
		"click .submit" : "submitEditForm",
		"click .delete" : "deleteSong"

	},

	renderEditForm: function() {
    this.$el.html( this.formTemplate( this.model.toJSON() ));
		console.log(this.model);
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
    console.log(this.model);
    this.model.save(data);
	},

	deleteSong: function() {
		this.model.destroy();
    this.$el.fadeOut()
	},

	initialize: function() {
		this.template = Handlebars.compile($("#songTemplate").html());
		this.formTemplate = Handlebars.compile($("#songForm").html());
    this.listenTo(this.model, 'change', this.render);
    this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ));
    $('#library').append(this.$el);
    // console.log(this.model.toJSON())
    var allSongs = [];
    allSongs.push(this.model.toJSON())
    console.log(allSongs.length)
	}
});