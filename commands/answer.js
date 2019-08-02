const hasUserSession = require('../functions/hasUserSession');

module.exports = {
  name: 'answer',
  description: 'Enter a lie',
  async execute(message, client) {
    const { author } = message;
    client.users.get(author.id).send('boo');
  }
}