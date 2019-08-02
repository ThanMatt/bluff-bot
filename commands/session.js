const checkSession = require('../functions/checkSession');
const hasUserSession = require('../functions/hasUserSession');
const getHost = require('../functions/getHost');

module.exports = {
  name: 'session',
  description: 'Shows the ongoing session info the user is currently in',
  async execute(message) {
    const { member } = message;

    const currentAuthor = await hasUserSession(member.id);

    if (currentAuthor) {
      const sessionHost = await getHost(currentAuthor.sessionID);
      const sessionPlayers = await checkSession(currentAuthor);

      if (sessionPlayers) {
        message.channel.send({
          embed: {
            title: `${sessionHost}'s session`,
            description: `**Players:**\n${sessionPlayers.join('\n')}`
          }
        })
      } else {
        message.channel.send(`There was an error!`);
      }

    } else {
      message.channel.send(`You're not in a session!`);
    }
  }
}