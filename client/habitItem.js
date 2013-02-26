/**
 * @habitItem.js
 **/

Template.habitItem.events = {
  'click .destroy': function( evt ) {
    Habits.remove( this._id );
  },

  'click .done': function( evt ) {
    calProgress( this );
  }
};

// Helper Methods
// ------------------------------

var calProgress = function( habit ) {
  var ONE_DAY = 1000 * 60 * 60 * 24;

  var today     = new Date(),
      lastEntry = habit.days[ habit.days.length - 1],
      diff;

  if ( lastEntry ) {
    // Check if entries are progressive in dates
  } else {
    // Update the habit progression
  }
};