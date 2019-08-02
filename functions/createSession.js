const Session = require('../models/session-model');

module.exports = createSession = (user, sessionID) => {
  const { id, displayName } = user;
  return new Session({
    sessionID,
    userID: id,
    user: displayName,
    score: 0,
    role: 1,
    isAnswered: 0,
  }).save().then(() => {
    console.log(`Session ID ${sessionID} created by ${user}`)
    return true
  }).catch((error) => {
    console.log(`There was an error: ${error}`)
    return false
  })

}
