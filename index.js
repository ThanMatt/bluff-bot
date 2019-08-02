const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const { discord, mongo } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

mongoose.connect(mongo.connect, {
  useNewUrlParser: true,
  useFindAndModify: false
})

mongoose.connection.once('open', () => {
  console.log(`MongoDB Connection: ${mongoose.connection.readyState}`)
})

client.once('ready', () => {
  console.log(`${client.user.tag} connection: Success!`);
})

client.on('message', receivedMessage => {
  if (receivedMessage.content.startsWith(discord.prefix)) {
    processCommand(receivedMessage);
  }
})

const processCommand = receivedMessage => {
  const fullCommand = receivedMessage.content.split(' ')[0];
  const primaryCommand = fullCommand.substr(1);

  console.log(`Command executed: ${primaryCommand}`);
  if (primaryCommand === 'bluff') {
    choices = ['🇦', '🇧', '🇨', '🇩', '🇪']
    client.commands.get('bluff').execute(receivedMessage, receivedMessage.author);
  }

  if (primaryCommand === 'join') {
    sessionID = receivedMessage.content.substr(fullCommand.length + 1);
    client.commands.get('join').execute(receivedMessage, receivedMessage.author, sessionID)
  }

  if (primaryCommand === 'quit') {
    client.commands.get('quit').execute(receivedMessage, receivedMessage.author)
  }

  if (primaryCommand === 'session') {
    client.commands.get('session').execute(receivedMessage, receivedMessage.author)
  }
}

client.login(discord.token);