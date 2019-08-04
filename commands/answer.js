const getUserInfo = require('../functions/hasUserAnswered');
const userAnswered = require('../functions/userAnswered')

module.exports = {
  name: 'answer',
  description: 'Enter a lie',
  async execute(message, client, answer) {
    const { author } = message;
    const currentAuthor = await getUserInfo(author.id);

    if (currentAuthor) {

      if (currentAuthor.isAnswered) {
        client.users.get(author.id).send(`You've already answered or the session hasn't started yet.`)
      } else {
        userAnswered(answer, author.id);
        client.users.get(author.id).send(answer);
      }
    } else {
      client.users.get(author.id).send(`No ongoing sessions`)
    }
    //client.users.get(author.id).send(answer);
  }
}