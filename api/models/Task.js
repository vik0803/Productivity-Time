/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

    description: {
      type: 'string',
      required: true
    },

    actions: {
      collection: 'nextaction',
      via: 'task'
    },

    user: {
      model: 'user',
      required: true
    },

    goal: {
      type: 'string',
      required: true
    }

	}

};
