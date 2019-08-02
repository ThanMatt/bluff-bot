const joinSession = require('../functions/joinSession');
const hasUserSession = require('../functions/hasUserSession');

module.exports = {
  name: 'join',
  description: 'Joins a user to a particular session',
  async execute(message, sessionID, client) {
    const { member, author } = message;

    const currentAuthor = await hasUserSession(member.id);

    if (!currentAuthor) {
      const joinStatus = await joinSession(member, sessionID);

      if (joinStatus) {
        message.channel.send(`${author} joins the fray!`);
        client.users.get(author.id).send(`This is where you enter your lies -- not on the server\nEnter your lie by typing \`-answer <your lie>\` if the question is present.`)
      } else {
        message.channel.send(`No session found`)
      }
    } else {
      message.channel.send(`${author}, you can only join one session at a time\nEnter \`-quit\` command to leave your current session `)

    }

  }
}