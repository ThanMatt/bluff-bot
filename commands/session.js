const checkSession = require('../functions/checkSession');
const hasUserSession = require('../functions/hasUserSession');

module.exports = {
  name: 'session',
  description: 'Shows the ongoing session info the user is currently in',
  async execute(message) {
    const { member, guild } = message;

    const currentAuthor = await hasUserSession(member.id, guild.id);

    if (currentAuthor) {
      const { sessionID } = currentAuthor;
      const session = await checkSession(currentAuthor);
      const sessionHost = session.filter((player) => { return player.role === 1 });

      if (session) {
        const status = ['Waiting', 'Playing', 'Judging'];
        const sessionPlayers = session.map((player) => { return player.user })

        message.channel.send({
          embed: {
            title: `${sessionHost[0].user}'s session`,
            description: `Join Code: **${sessionID}**\nSession Status: **${status[sessionHost[0].status]}**\n\n**Players:**\n${sessionPlayers.join('\n')}`
          }
        })
      }

    } else {
      message.channel.send(`You're not in a session!`);
    }
  }
}