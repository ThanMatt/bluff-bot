const Session = require('../models/session-model');

module.exports = checkSession = (currentUser) => {
  const { sessionID, guildID } = currentUser;

  return Session.find({ sessionID, guildID })
    .then((currentSession) => {
      return currentSession
    }).catch((err) => {
      console.log(`There was an error: ${err}`)
    })
}