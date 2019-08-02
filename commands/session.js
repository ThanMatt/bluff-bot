const checkSession = require('../functions/checkSession');

module.exports = {
  name: 'session',
  description: 'Shows the ongoing session info the user is currently in',
  async execute(message, author) {
    const sessionInfo = await checkSession(author.username);
    if (sessionInfo) {
      message.channel.send({
        embed: {
          title: `${sessionInfo.host}'s session`,
          description: sessionInfo.users.join('\n')
        }
      })
    } else {
      message.channel.send(`You're not in a session!`);
    }
  }
}