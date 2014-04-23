module.exports.routes = {
  '/processLogin': {
    controller: 'UserController',
    action: "processLogin"
  },
  '/processSignup': {
    controller: 'UserController',
    action: "processSignup"
  },
  '/findTasksByUser': {
    controller: 'TaskController',
    action: 'findTasksByUser'
  }
};
