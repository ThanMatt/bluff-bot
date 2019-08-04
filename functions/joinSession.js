const Session = require('../models/session-model');

module.exports = joinSession = (user, sessionID, guildID) => {
  const { displayName, id } = user;

  return Session.findOne({ sessionID, guildID, role: 1 })
    .then((currentSession) => {
      if (currentSession) {

        if (currentSession.status === 0) {
          new Session({
            sessionID,
            guildID,
            userID: id,
            user: displayName,
            score: 0,
            role: 0,
            status: 0,
            isAnswered: 1
          }).save()
          return true
        }
        return false;
      } else {
        return false
      }
    })
}