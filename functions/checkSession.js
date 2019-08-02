const Session = require('../models/session-model');

module.exports = checkSession = (currentUser) => {
  const { sessionID } = currentUser;

  return Session.find({ sessionID })
    .then((currentSession) => {
      if (currentSession) {
        const players = currentSession.map((player) => { return player.user })

        return players;
      }
      return false
    }).catch((err) => {
      console.log(`There was an error: ${err}`)
    })
}