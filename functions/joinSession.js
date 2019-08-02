const Session = require('../models/session-model');

module.exports = joinSession = (user, sessionID) => {
  return Session.findOne({ user })
    .then((currentUser) => {
      if (!currentUser) {
        return Session.findOne({sessionID})
        .then((currentSession) => {
          if (currentSession) {
            new Session({
              sessionID,
              user,
              score: 0,
              role: 0
            }).save()
            status = 0 
          } else {
            status = 1
          }
          return status
        })
      } else {
        status = 2
      }
      return status;
    })
}