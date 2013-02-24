/**
 * @navBar.js
 *
 * Event handling for actions done in the navigation bar.
 **/

Template.navBar.events = {
  'click #logout-btn': function( evt ) {
    evt.preventDefault();

    Meteor.logout(function( err ) {
      Meteor.Router.to( '/' );
    });
  }
};