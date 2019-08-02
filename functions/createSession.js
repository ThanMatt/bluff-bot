const Session = require('../models/session-model');

module.exports = createSession = (user, sessionID) => {
  return Session.findOne({ user })
    .then((currentAuthor) => {
      if (!currentAuthor) {
        new Session({
          sessionID,
          user,
          score: 0,
          role: 1
        }).save().then(() => {
          console.log(`Session ID ${sessionID} created by ${user}`)
        })
        return false;
      } else {
        return true
      }
    })

}