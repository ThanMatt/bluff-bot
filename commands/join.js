const joinSession = require('../functions/joinSession');
module.exports = {
  name: 'join',
  description: 'Joins a user to a particular session',
  async execute(message, author, sessionID, client) {
    const status = await joinSession(author.id, sessionID);
    console.log(status);
    if (status === 2) {
      message.channel.send(`${author.username} joins the fray!`)
    } else if (status === 1) {
      client.users.get(author.id).send(`You've already joined!`)
    } else {
      client.users.get(author.id).send(`No sessions found`)
    }
  }
}