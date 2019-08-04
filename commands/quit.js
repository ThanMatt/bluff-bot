const quitSession = require('../functions/quitSession');

module.exports = {
  name: 'quit',
  description: 'Quits a session',
  async execute(message) {
    const { member, author, guild } = message;
    const currentAuthor = await hasUserSession(member.id, guild.id);

    if (currentAuthor) {

      const isUserHost = await quitSession(currentAuthor);

      if (isUserHost) {
        message.channel.send(`Host ${author} quits the session. The session has ended`)
      } else {
        message.channel.send(`Player ${author} leaves the session`)
      }
    } else {
      message.channel.send(`You're not in a session`);
    }
  }
}