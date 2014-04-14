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

      return res.json(user);

    });
  },

  'logout': function(req, res){

    // Wipe their session
    req.session = {};

    res.send(200);
  }

};
