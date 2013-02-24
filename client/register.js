/**
 * @register.js
 *
 * Handles user registration for new accounts
 **/

Template.register.events = {
  'submit #reg-form': function( evt ) {
    evt.preventDefault();

    // Get the user input values from the form
    var options = {
      username: $( '#reg-username' ).val(),
      email: $( '#reg-email' ).val(),
      password: $( '#reg-pw' ).val()
    };

    Accounts.createUser(options, function( err ) {
      if ( err ) {
        console.log(err);
      }
      else {
        console.log('User created');
      }
    });
  }
};