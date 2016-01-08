App.Views.Player = Backbone.View.extend({

	el: "#main-content",

	events: {

		"click .song"			: "startPlay",
		"click .minimize" : "hidePlayer",
		"click .maximize" : "showPlayer",

	},

	hidePlayer: function() {
		var albumArt = this.model.attributes.album_art;
		$("#player").hide()
		$(".minimize").text("[+]")
		$("#player-section").find("#play-text").html("<span><strong><a href='#player/" + this.model.attributes.id + "'>Now playing:</a></strong> " + this.model.attributes.title + ", " + this.model.attributes.artist + "</span> <span class='maximize'>[+]</span>")
		$("#player-section").css({
			"border": "1px solid grey",
			"border-right": "none",
			"padding": "5px"
		})
	},

	showPlayer: function() {
		$("#player").show()
		$("#player-section").find("#play-text").empty();
	},

	initialize: function() {
		this.template = Handlebars.compile($("#audioPlayer").html());
		this.render(this.model)
	},

	render: function(model) {
		this.$el.find("#player").html(this.template( model.toJSON() ));
		$("#player").show();
	}

})