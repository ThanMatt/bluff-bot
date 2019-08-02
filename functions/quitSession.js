const Session = require('../models/session-model');

module.exports = quitSession = (user) => {
  return Session.findOne({ user })
    .then((currentUser) => {
      if (currentUser) {
        const { role, user, sessionID } = currentUser;

        if (role === 1) {
          Session.deleteMany({ sessionID }).then()
          status = 0
        } else {
          Session.deleteOne({ user }).then()
          status = 1
        }
        return status
      } else {
        status = 2
      }
      return status
    })
}