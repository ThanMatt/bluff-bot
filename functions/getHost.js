const Session = require('../models/session-model');

module.exports = getHost = (sessionID) => {
  return Session.findOne({ sessionID, role: 1 })
    .then((currentSession) => {
      if (currentSession) {
        return currentSession.user;
      } else {
        return false;
      }
    })
}