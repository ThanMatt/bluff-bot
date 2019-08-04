const Session = require('../models/session-model');
const Answer = require('../models/answer-model');

module.exports = quitSession = (currentUser) => {
  const { userID, role, sessionID, guildID } = currentUser;
  if (role === 1) {
    Session.deleteMany({ sessionID, guildID }).then();
    Answer.deleteMany({ sessionID, guildID }).then();
    return true
  } else {
    Session.deleteOne({ userID, guildID }).then();
    Answer.deleteOne({ userID, guildID }).then();
    return false
  }
}