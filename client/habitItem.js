/**
 * @habitItem.js
 **/

Template.habitItem.events = {
  'click .destroy': function( evt ) {
    Habits.remove( this._id );
  }
};