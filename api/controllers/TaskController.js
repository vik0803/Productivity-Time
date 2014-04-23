/**
 * TaskController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  'findTasksByUser': function(req, res){
    console.log('Here\'s the current session!');
    console.log(JSON.stringify(req.session, null, 4));
    Task.find({ user: req.session.currentUser.id }).populate("completedActions").populate("currentAction").exec(function(err, tasks){
      if ( err ) {
        console.log('Errors happened! Output:\n' + JSON.stringify(err, null, 4));
        return res.send(err);
      }
      return res.json(tasks);
    });
  }

};
