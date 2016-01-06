App.Collections.Songs = Backbone.Collection.extend({

  model: App.Models.Song,
  url: "http://localhost:3000/songs",
  comparator: function(obj1, obj2) {
  	return obj1.id-obj2.id
  }

});

		// songs.sort(function(obj1, obj2) {
		// 	return obj1.id - obj2.id;