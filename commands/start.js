const getQuestion = require('../functions/getQuestion');
const hasUserSession = require('../functions/hasUserSession');
const startSession = require('../functions/startSession');
const getAnswers = require('../functions/getAnswers');

module.exports = {
  name: 'start',
  description: 'Starts the game session',
  async execute(message, client) {
    const { member, guild } = message

    const currentAuthor = await hasUserSession(member.id, guild.id);
    if (currentAuthor) {
      if (currentAuthor.role === 1) {
        const { sessionID } = currentAuthor;
        const { question, correctAnswer } = await getQuestion();
        const timer = 20000;
        let answers = [];


        if (currentAuthor.status) {
          message.channel.send(`The session has already started!`)
        } else {
          startSession(sessionID, guild.id);

          if (question) {
            message.channel.send({
              embed: {
                title: 'Question',
                description: `${question}\n\nEnter your lie by typing \`-answer <your lie>\` thru direct message\n\nYou have **15** seconds`
              }
            })
            client.users.get(member.id).send({
              embed: {
                title: 'Question',
                description: `${question}\n\nEnter your lie by typing \`-answer <your lie>\` here\n\nYou have **${timer / 1000}** seconds`
              }
            })

            setTimeout(async () => {
              message.channel.send(`Time's up`)
              players = await getAnswers(guild.id, sessionID);
              const choices = ['B. ', 'C. ', 'D. ', 'E. ', 'F. ', 'G. '];
              let counter = 0;
              answers = players.map((player) => { return player.answer });
              answers.push(correctAnswer);
              answers.sort(() => Math.random() - 0.5);
              message.channel.send({
                embed: {
                  title: 'Judge Time',
                  description: `${question}\n\nChoices:\n${'**A.** ' + answers.join(`\n**${choices[counter++]}**`)}`
                }
              })
            }, timer);

          } else {
            message.channel.send(`There was an error`)
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
