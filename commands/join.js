const joinSession = require('../functions/joinSession');
module.exports = {
  name: 'join',
  description: 'Joins a user to a particular session',
  async execute(message, author, sessionID) {
    const joinStatus = await joinSession(author.username, sessionID);

    if (joinStatus === 0) {
      message.channel.send(`${author} joins the fray!`);
    } else if (joinStatus === 1) {
      message.channel.send(`No session found`)
    } else {
      message.channel.send(`${author}, you can only join one session at a time\nEnter \`-quit\` command to leave your current session `)
    }
  }
}