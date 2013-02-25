/**
 * @user.js
 *
 * Functionality for the user profile page
 **/

Habits = new Meteor.Collection( 'habits' );

Template.user.events = {
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

Template.user.hasHabits = function() {
  var habits = Habits.find();

  return habits.count();
};

Template.user.habits = function() {
  return Habits.find( {}, { sort: { name: 1 } } );
};