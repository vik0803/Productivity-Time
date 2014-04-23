var bcrypt = require('bcrypt-nodejs');

/**
 * UserController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  'processLogin': function(req, res){

    var data = req.params.all();

    console.log('Here\'s the POST data');
    console.log(data);

    User.findOne({ email: data.email }).exec( function( err, user ) {

      console.log('Here\'s the user data:');
      console.log(user);

      if ( err ) {
        console.log('Here\'s the error data:');
        console.log(err);
        return res.send(500, 'A mysterious error occured!');
      }

      if ( !user ) {
        return res.send(500, 'No user found with that email address!');
      }

      bcrypt.compare(data.password, user.password, function(err, result){

        if ( result === true ) {
          console.log('Comparison was true! WAT!');
          console.log('Here\'s your user:\n' + JSON.stringify(user, null, 4));
          req.session.authenticated = true;
          req.session.currentUser = user;
          return res.send(user);
        } else {
          console.log('Password didn\'t match, redirecting to login...');
          return res.send(500, 'Incorrect login. Please try again.');
        }
      });

    });
  },

  'processLogout': function(req, res){

    // Wipe their session
    req.session.authenticated = false;
    req.session.currentUser = {};

    res.send(200);
  },

  'processSignup': function(req, res){
    var data = req.params.all();

    User.create({ email: data.email, password: data.password }).exec(function( err, user ) {

      console.log('Here\'s the user data:');
      console.log(user);

      if ( err ) {
        console.log('Here\'s the error data:');
        console.log(JSON.stringify(err, null, 4));
        return res.send(500, 'A mysterious error occured!');
      }

      if ( !user ) {
        return res.send(500, 'No user found with that email address!');
      }

      console.log('Here\'s your user:\n' + JSON.stringify(user, null, 4));
      req.session.authenticated = true;
      req.session.currentUser = user;
      return res.json(user);
    });
  }

};
