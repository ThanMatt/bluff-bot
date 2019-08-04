const Session = require('../models/session-model');
const Answer = require('../models/answer-model');

module.exports = userAnswered = async (answer, userID) => {
  const sessionUser = await Session.findOneAndUpdate({ userID }, {
    isAnswered: 1
  }).then((currentUser) => {
    return currentUser
  })

  const { sessionID, guildID, user } = sessionUser;

  return new Answer({
    sessionID,
    guildID,
    userID,
    user,
    answer
  }).save().then();
}