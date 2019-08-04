const Session = require('../models/session-model');

module.exports = hasUserSession = (userID, guildID) => {

  return Session.findOne({ userID, guildID })
    .then((currentUser) => {
      if (currentUser)
        return currentUser;
      else
        return false
    })
}