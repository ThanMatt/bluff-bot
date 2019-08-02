const Session = require('../models/session-model');

module.exports = hasUserSession = (userID) => {

  return Session.findOne({ userID })
    .then((currentUser) => {
      if (currentUser)
        return currentUser;
      else
        return false
    })
}