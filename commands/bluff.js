const createSession = require('../functions/createSession');
const Question = require('../models/question-model');

module.exports = {
  name: 'bluff',
  description: 'Starts bluffing game session',
  async execute(message, author, client) {
    isHostAlready = await createSession(author);

    answers = [];

    if (!isHostAlready) {
      Question.countDocuments({})
        .then((data) => {
          randomQuestion = Math.floor(Math.random() * data) + 1;
          Question.findOne({ number: randomQuestion })
            .then((data) => {
              message.channel.send(data.question)
            })
        })
    } else {
      message.channel.send('You\'ve already created a session!')
    }
  }
}

