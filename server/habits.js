/**
 * @habits.js
 **/

Meteor.publish( 'habits', function( userId ) {
  return Habits.find({ userId: userId });
});