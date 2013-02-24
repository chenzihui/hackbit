/**
 * @register.js
 *
 * Handles user registration for new accounts
 **/

// Event Handling
// ------------------------------

Template.register.events = {
  'submit #reg-form': function( evt ) {
    evt.preventDefault();

    Session.set( 'regErrors', undefined );

    // Get the user input values from the form
    var options = {
      username: $( '#reg-username' ).val(),
      email: $( '#reg-email' ).val(),
      password: $( '#reg-pw' ).val()
    };

    // Form validation
    var errorMsgs = validateReg( options );

    if( _.isEmpty(errorMsgs) ) {
      Accounts.createUser( options, function( err ) {
        // TODO: Validaton for already existing emails & usernames
        Meteor.Router.to( '/user' );
      });
    } else {
      Session.set( 'regErrors', errorMsgs );
    }
  }
};

// Template Helpers
// ------------------------------

Template.register.regErrors = function() {
  return Session.get( 'regErrors' );
};

/*
 * Validates the registration form
 *
 * @method validateReg
 *
 * @param {Object} - User input
 *
 * @return {Object} - Error messages, if any
 */

var validateReg = function( values ) {
  var errorMsgs  = [],
      emailRegex = /^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/,
      passRegex  = /^[a-zA-Z0-9]{6,}/;

  // Check that no fields are empty
  for ( key in values ) {
    if ( values.hasOwnProperty( key ) ) {
      if ( values[key].length === 0 ) {
        errorMsgs.push( 'All fields must be filled up' );
        break;
      }
    }
  }

  // Check that the email provided is valid
  if ( !emailRegex.test( values.email ) ) {
    errorMsgs.push( 'Please enter a valid email address' );
  }

  // Check that passwords contain at least 6 alphanumeric characters
  if ( !passRegex.test( values.password ) ) {
    errorMsgs.push( 'Please provide at least 6 alphanumeric characters ' +
        'for your password' );
  }

  return errorMsgs;
};