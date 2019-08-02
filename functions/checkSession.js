const Session = require('../models/session-model');
const getHost = require('../functions/getHost');

module.exports = checkSession = (user) => {
  return Session.findOne({ user })
    .then((currentUser) => {
      if (currentUser) {
        const { sessionID } = currentUser;

        return Session.find({ sessionID })
          .then(async (currentSession) => {
            host = await getHost(sessionID);
            users = currentSession.map((sessionUser) => { return sessionUser.user })
            return {
              host,
              users
            }
          })

      } else {
        return false
      }
    })
}