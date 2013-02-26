/**
 * @habits.js
 *
 * Functionality for the user profile page
 **/

Template.habits.events = {
  'submit #habit-form': function( evt ) {
    evt.preventDefault();

    var name      = $( '#new-habit' ).val(),
        userId    = Meteor.userId,
        timestamp = ( new Date() ).getTime(),
        streak    = 0;

    Habits.insert({
      userId: userId,
      name: name,
      timestamp: timestamp,
      days: [],
      streak: streak
    }, function( err ) {
      $( '#new-habit' ).val( '' );
    });
  }
};

Template.habits.today = function() {
  return new Date();
};

Template.habits.hasHabits = function() {
  var habits = Habits.find();

  return habits.count();
};

Template.habits.habits = function() {
  return Habits.find( {}, { sort: { timestamp: -1 } } );
};