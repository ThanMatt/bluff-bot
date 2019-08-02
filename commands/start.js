const getQuestion = require('../functions/getQuestion');
const hasUserSession = require('../functions/hasUserSession');
const checkSession = require('../functions/checkSession');
module.exports = {
  name: 'start',
  description: 'Starts the game session',
  async execute(message, client) {
    const { member } = message

    const currentAuthor = await hasUserSession(member.id);
    if (currentAuthor) {
      if (currentAuthor.role === 1) {
        const question = await getQuestion();

        if (question) {
          message.channel.send({
            embed: {
              title: 'Question',
              description: `${question}\n\nEnter your lie by typing \`-answer <your lie>\` on my direct message`
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
        }

      } else {
        message.channel.send(`You're not the host of this session.`)
      }

    } else {
      message.channel.send(`You haven't created a session.`)
    }

  }
}