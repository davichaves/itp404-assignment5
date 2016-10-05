import Ember from 'ember';

export default Ember.Component.extend({
  songIsPopular: function() {
    return this.song.playCount>20;
  }.property()
});
