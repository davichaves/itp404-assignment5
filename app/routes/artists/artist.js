import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.artist_id);
    return $.ajax({
      url: 'http://itp-api.herokuapp.com/api/artists/' + params.artist_id + '/songs',
      type: 'get'
    }).then(function(json){
      return json.songs.map(function(eachSong){
        var cleanArrayOfSongs = {
          id: eachSong.id,
          title: eachSong.title,
          artist: eachSong.artist,
          genre: eachSong.genre,
          price: eachSong.price,
          playCount: eachSong.playCount
        };
        console.log(cleanArrayOfSongs);
        return cleanArrayOfSongs;
      });
    });
  }
});
