const Session = require('../models/session-model');

module.exports = joinSession = (userID, sessionID) => {
  let status;
  return Session.findOne({ sessionID })
    .then((currentSession) => {
      if (currentSession) {
        const { sessionID } = currentSession;
        return Session.findOne({ sessionID, userID })
          .then((currentUser) => {
            if (!currentUser) {
              new Session({
                sessionID,
                userID,
                score: 0,
                role: 0
              }).save().then(() => {
                console.log(`User ${userID} joined in ${sessionID}`)
              })
              return status = 2
            } else {
              status = 1
              return status
            }
          })
      } else {
        console.log('No session')
        return status = 0;
      }
    })
}