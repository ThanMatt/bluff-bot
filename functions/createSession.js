const Session = require('../models/session-model');
const uniqid = require('uniqid');

module.exports = createSession = (userID) => {
  sessionID = uniqid();
  return Session.findOne({ userID, role: 1 })
    .then((currentAuthor) => {
      if (!currentAuthor) {
        new Session({
          sessionID,
          userID,
          score: 0,
          role: 1
        }).save().then((data) => {
          console.log(`Session ID ${sessionID} created by ${userID}`)
        })
        return false;
      } else {
        return true
      }
    })

}