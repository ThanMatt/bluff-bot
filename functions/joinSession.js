const Session = require('../models/session-model');

module.exports = joinSession = (user, sessionID) => {
  const { displayName, id } = user;

  return Session.findOne({ sessionID })
    .then((currentSession) => {
      if (currentSession) {
        new Session({
          sessionID,
          userID: id,
          user: displayName,
          score: 0,
          role: 0
        }).save()
        return true
      } else {
        return false
      }
    })
}