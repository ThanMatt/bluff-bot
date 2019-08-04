const Question = require('../models/question-model');

module.exports = getQuestion = async () => {
  totalQuestions = await Question.countDocuments({}).then((data) => {return data});

  random = Math.floor(Math.random() * totalQuestions) + 1;
  return Question.findOne({number: random})
  .then(({question}) => {
    if (question) {
      return question;
    } else {
      return false
    }
  }).catch((err) => {
    console.log(`There was an error: ${err}`);
  })
}