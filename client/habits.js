/**
 * @habits.js
 *
 * Functionality for the user profile page
 **/

Template.habits.events = {
  'submit #habit-form': function( evt ) {
    evt.preventDefault();

    var name   = $( '#new-habit' ).val(),
        userId = Meteor.userId;

    Habits.insert({
      userId: userId,
      name: name
    }, function( err ) {
      $( '#new-habit' ).val( '' );
    });
  }
};

Template.habits.hasHabits = function() {
  var habits = Habits.find();

  return habits.count();
};

Template.habits.habits = function() {
  return Habits.find( {}, { sort: { name: 1 } } );
};