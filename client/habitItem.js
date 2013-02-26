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
      lastEntry = habit.days[ habit.days.length - 1 ],
      diff      = lastEntry ? Math.floor( ( today - lastEntry ) / ONE_DAY ) : 0;

  if ( diff !== 1) {
    Habits.update( habit._id, { $set: { streak: 1 }, $push: { days: today } } );
  } else {
    Habits.update( habit._id, { $inc: { streak: 1 }, $push: { days: today } } );
  }
};