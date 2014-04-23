/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  console.log('Logging the session inside the policy..');
  console.log(JSON.stringify(req.session, null, 4));

  if (req.session.authenticated) {
    return next();
  }

  return res.forbidden('You are not permitted to perform this action.');
};
