/**
 * @login.js
 *
 * Handles logging in of users into their accounts
 **/

// Event Handling
// ------------------------------

Template.login.events = {
  'submit #login-form': function( evt ) {
    evt.preventDefault();

    Session.set( 'loginError', undefined );

    // Retrieve values provided by the user
    var user     = $( '#login-user' ).val(),
        password = $( '#login-pw' ).val();

    if ( user && password ) {
      Meteor.loginWithPassword( user, password, function( err ) {
        if ( err ) {
          Session.set( 'errors', 'Invalid user / email combination. Please try again.');
        }
        else {
          console.log('Signed in');
        }
      });
    }
    else {
      Session.set( 'loginError', 'Please enter your username and email' );
    }
  }
};

// Template Helpers
// ------------------------------

Template.login.loginError = function() {
  return Session.get( 'loginError' );
};