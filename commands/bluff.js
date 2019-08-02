const createSession = require('../functions/createSession');
const hasUserSession = require('../functions/hasUserSession');
const uniqid = require('uniqid');

module.exports = {
  name: 'bluff',
  description: 'Starts bluffing game session',
  async execute(message) {
    const { member, author } = message;

    const currentAuthor = await hasUserSession(member.id);

    if (!currentAuthor) {
      sessionID = uniqid();
      session = await createSession(member, sessionID);

      if (session) {
        message.channel.send(`${author} has created a session!`)
        message.channel.send({
          embed: {
            title: `${member.displayName}'s session`,
            description: `Join code: **${sessionID}**\n\nHow to join:\n\`-join ${sessionID}\``
          }
        })
      } else {
        message.channel.send(`There was an error!`)
      }

    } else {
      message.channel.send(`${author}, You have an ongoing session`)
    }
  }
}

