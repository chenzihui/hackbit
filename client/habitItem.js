/**
 * @habitItem.js
 **/

Template.habitItem.events = {
  'click .destroy': function( evt ) {
    Habits.remove( this._id );
  },

  'click .done': function( evt, tmpl ) {
    calProgress( this );
  }
};

Template.habitItem.hasClick = function() {
  var today     = new Date(),
      lastEntry = this.days[ this.days.length - 1 ];

  return _calDateDiff( today, lastEntry ) === 0 ? 'clicked' : 'bg-white';
};

// Helper Methods
// ------------------------------

var calProgress = function( habit ) {
  var today     = new Date(),
      lastEntry = habit.days[ habit.days.length - 1 ],
      diff      = lastEntry ? _calDateDiff( today, lastEntry ) : 0;

  if ( diff !== 1) {
    Habits.update( habit._id, { $set: { streak: 1 }, $push: { days: today } } );
  } else {
    Habits.update( habit._id, { $inc: { streak: 1 }, $push: { days: today } } );
  }
};

var _calDateDiff = function( start, end ) {
  var ONE_DAY = 1000 * 60 * 60 * 24;

  return Math.floor( ( start - end ) / ONE_DAY );
}