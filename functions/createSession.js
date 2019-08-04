const Session = require('../models/session-model');

module.exports = createSession = (user, sessionID, guildID) => {
  const { id, displayName } = user;
  return new Session({
    sessionID,
    guildID,
    userID: id,
    user: displayName,
    score: 0,
    role: 1,
    status: 0,
    isAnswered: 1,
  }).save().then(() => {
    console.log(`Session ID ${sessionID} created by ${id}`)
    return true
  }).catch((error) => {
    console.log(`There was an error: ${error}`)
    return false
  })

}
