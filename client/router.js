/**
 * Routes for the application are defined here using Meteor-Router
 **/

Meteor.Router.add({
  '/': 'home',

  '/register': 'register',
  '/login': 'login'
});