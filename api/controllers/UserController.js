/**
 * UserController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {



  'processLogin': function(req, res){

  },

  'logout': function(req, res){

    // Wipe their session
    req.session = {};

    res.send(200);
  }


};
