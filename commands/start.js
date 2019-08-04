const getQuestion = require('../functions/getQuestion');
const hasUserSession = require('../functions/hasUserSession');
const startSession = require('../functions/startSession');

module.exports = {
  name: 'start',
  description: 'Starts the game session',
  async execute(message, client) {
    const { member, guild } = message

    const currentAuthor = await hasUserSession(member.id, guild.id);
    if (currentAuthor) {
      if (currentAuthor.role === 1) {
        const { sessionID } = currentAuthor;
        const question = await getQuestion();

        if (currentAuthor.status) {
          message.channel.send(`The session has already started!`)
        } else {
          startSession(sessionID, guild.id);

          if (question) {
            message.channel.send({
              embed: {
                title: 'Question',
                description: `${question}\n\nEnter your lie by typing \`-answer <your lie>\` thru direct message`
              }
            })
            client.users.get(member.id).send({
              embed: {
                title: 'Question',
                description: `${question}\n\nEnter your lie by typing \`-answer <your lie>\` here`
              }
            })

          } else {
            message.channel.send(`There was an error`)
            console.log('There was an error getting the question')
          }

        }

      } else {
        message.channel.send(`You're not the host of this session.`)
      }

    } else {
      message.channel.send(`You haven't created a session.`)
    }

  }
}