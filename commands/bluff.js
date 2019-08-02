const createSession = require('../functions/createSession');
const Question = require('../models/question-model');
const uniqid = require('uniqid');

module.exports = {
  name: 'bluff',
  description: 'Starts bluffing game session',
  async execute(message, author) {
    sessionID = uniqid();
    isHostAlready = await createSession(author.username, sessionID);

    answers = [];

    if (!isHostAlready) {
      message.channel.send(`${author} has created a session!`)
      message.channel.send({
        embed: {
          title: `${author.username}'s session`,
          description: `Join code: **${sessionID}**\n\nHow to join:\n\`-join ${sessionID}\``
        }
      })
    } else {
      message.channel.send(`${author}, You have an ongoing session`)
    }
  }
}

