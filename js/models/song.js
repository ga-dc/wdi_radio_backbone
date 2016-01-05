App.Models.Song = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/songs',

  initialize: function () {
    console.log("New song created");
 }
});
