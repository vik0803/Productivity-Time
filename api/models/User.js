/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt-nodejs');

module.exports = {

	attributes: {

    email: {
      type: 'string',
      unique: true,
      required: true
    },

    password: {
      type: 'string',
      required: true
    },

    tasks: {
      collection: 'task',
      via: 'user'
    }

  },

  beforeCreate: function(values, next) {
    var salt = bcrypt.genSaltSync(10);
    bcrypt.hash(values.password, salt, null, function(err, hash) {
      if(err) return next(err);
      values.password = hash;
      next();
    });
  }

};
