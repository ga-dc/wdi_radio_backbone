App.Views.GrumblesCreate= Backbone.View.extend({

	el: "#createGrumble",

	events: {

		// "click .new" : 		"render"
		"click .create" : "createGrumble"

	},

	createGrumble: function() {
		event.preventDefault();
    var data = {
       title: $("[name='title']").val(),
       authorName: $("[name='authorName']").val(),
       content: $("[name='content']").val(),
       photoUrl: $("[name='photoUrl']").val()
    }
    grumble.create(data)
	},

	initialize: function() {
		console.log("form initialized");
		this.createTemplate = Handlebars.compile($("#createGrumble").html());
		render();
	},

	render: function() {
		this.$el.html(this.createGrumble());
		$('#formContainer'.append(this.$el);
		console.log(this.$el)
	}

});