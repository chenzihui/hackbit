/**
 * @habits.js
 *
 * Functionality for the user profile page
 **/

if ( Meteor.userId() ) {
  Meteor.autorun(function() {
    Meteor.subscribe( 'habits', Meteor.userId() );
  });
}

Template.habits.events = {
  'submit #habit-form': function( evt ) {
    evt.preventDefault();

    var name      = $( '#new-habit' ).val(),
        userId    = Meteor.userId(),
        timestamp = ( new Date() ).getTime(),
        streak    = 0;

    Habits.insert({
      userId: userId,
      name: name,
      timestamp: timestamp,
      days: [],
      streak: streak
    }, function( err, id ) {
      $( '#new-habit' ).val( '' );
    });
  }
};

Template.habits.today = function() {
  return new Date();
};

Template.habits.hasHabits = function() {
  var habits = Habits.find({ userId: Meteor.userId() });

  return habits.count();
};

Template.habits.habits = function() {
  return Habits.find({ userId: Meteor.userId() }, { sort: { timestamp: -1 } } );
};