import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax({
    url: 'http://itp-api.herokuapp.com/api/artists',
    type: 'get'
    }).then(function(json){
      console.log(json);
      return json.artists.map(function(eachArtist){
        var cleanArrayOfArtists = {
          id: eachArtist.id,
          name: eachArtist.name
        };
        return cleanArrayOfArtists;
      });
    });
  }
});

