import Ember from 'ember';

export default Ember.Component.extend({
  songIsPopular: function() {
    return this.song.playCount>20;
  }.property(),

  songIsExpensive: function() {
    return this.song.price>1;
  }.property()
});
