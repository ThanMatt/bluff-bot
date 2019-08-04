const Session = require('../models/session-model');

module.exports = getUserInfo = (userID) => {
  return Session.findOne({userID})
  .then((currentUser) => {
    return currentUser
  })
}