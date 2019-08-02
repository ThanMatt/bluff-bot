const hasUserSession = require('../functions/hasUserSession');

module.exports = {
  name: 'answer',
  description: 'Enter a lie',
  async execute(message, author) {
    console.log(await hasUserSession(author.username));
  }
}