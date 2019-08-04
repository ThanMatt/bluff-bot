const Session = require('../models/session-model');

module.exports = startSession = (sessionID, guildID) => {
  return Session.updateMany({sessionID, guildID}, {
    status: 1,
    isAnswered: 0
  }).then();
}