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

    completedActions: {
      collection: 'nextaction',
      via: 'task'
    },

    currentAction: {
      model: 'nextaction'
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
