App.Views.Player = Backbone.View.extend({

	el: "#main-content",

	events: {

		"click .song"			: "startPlay",
		"click .minimize" : "hidePlayer",
		"click .maximize" : "showPlayer"

	},

	// startPlay: function() {
	// 	$("#player").show()
	// },

	hidePlayer: function() {
		var albumArt = this.model.attributes.album_art;
		console.log(albumArt)
				$("#player").hide()

		// $(".song-info").empty();
		// $("#player").css("height", "100px");
		// $("#player-section").css("position", "fixed").css("position-left", "0")
		$(".minimize").text("[+]")
		$("#player-section").find("#play-text").html("<span><strong>Now playing:</strong> " + this.model.attributes.title + ", " + this.model.attributes.artist + "</span> <span class='maximize'>[+]</span>")
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

	// toggleSize: function() {
	// 	if ($(".minimize").text === "[-]") {
	// 		var albumArt = this.model.attributes.album_art;
	// 		$(".song-info").empty();
	// 		$("#player").css("height", "100px")
	// 		$(".minimize").text("[+]")
	// 	} else {
	// 		$(".song-info").html("<p>" + this.model.attributes.title + "</p><p>" + this.model.attributes.artist + "</p>")
	// 		// $("#player").css("height", )
	// 		$(".minimize").text("[-]")
	// 	}

	initialize: function() {
		this.template = Handlebars.compile($("#audioPlayer").html());
		this.render(this.model)
	},

	render: function(model) {
		this.$el.find("#player").html(this.template( model.toJSON() ));
		console.log(model)
		$("#player").show();
	}
})