App.Collections.Songs = Backbone.Collection.extend({

  model: App.Models.Song,
  url: "http://localhost:3000/songs",

});

console.log(App.Models.Song)