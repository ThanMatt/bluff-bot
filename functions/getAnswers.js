const Session = require('../models/session-model');
const Answer = require('../models/answer-model');

module.exports = getAnswers = async (guildID, sessionID) => {
  Session.updateMany({ guildID, sessionID }, {
    status: 2,
    isAnswered: 1
  }).then();

  return Answer.find({ guildID, sessionID })
    .then((currentSession) => {
      return currentSession;
    })
}