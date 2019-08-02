const Session = require('../models/session-model');

module.exports = quitSession = (userInfo) => {
  const { user, role, sessionID } = userInfo;
  if (role === 1) {
    Session.deleteMany({ sessionID }).then();
    return true
  } else {
    Session.deleteOne({ user }).then();
    return false
  }
}