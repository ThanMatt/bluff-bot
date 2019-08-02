const quitSession = require('../functions/quitSession');

module.exports = {
  name: 'quit',
  description: 'Quits a session',
  async execute(message, author, sessionID) {
    const quitStatus = await quitSession(author.username);

    if (quitStatus === 0) {
      message.channel.send(`Host ${author} quits the session. The session has ended`)
    } else if (quitStatus === 1) {
      message.channel.send(`Player ${author} leaves the session`)
    } else {
      message.channel.send(`You're not in a session`)
    }
  }
}