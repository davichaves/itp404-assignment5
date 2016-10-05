import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params);
    return $.ajax({
      url: 'http://itp-api.herokuapp.com/api/artists',
      type: 'get'
    }).then(function(json){
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

