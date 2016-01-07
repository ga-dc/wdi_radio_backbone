App.Views.SongCreate = Backbone.View.extend({

	el: "#page-header",

	events: {

		"click .add" 		: "openNew",
		"click .close" 	: "closeNew",
		"click .submit" : "createNew"

	},

	openNew: function() {
    $(".new-song-modal").show();
	},

	closeNew: function() {
    $(".new-song-modal").hide();
	},

	createNew: function() {
		event.preventDefault();
    var data = {
       title: $("#new-song-title").val(),
       audio_url: $("#new-song-audio-url").val(),
       album_art: $("#new-song-album-art").val(),       
       artist: $("#new-song-artist").val(),
       genre: $("#new-song-genre").val()
    }
    this.collection.create(data);
	},

	initialize: function() {
		this.template = Handlebars.compile($("#newSong").html());
		this.$el.find(".new-container").html(this.template({}))
		$(".new-song-modal").hide()
	}

})