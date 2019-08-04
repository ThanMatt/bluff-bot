const mongoose = require('mongoose');
const { mongo } = require('../config.json');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  sessionID: String,
  guildID: String,
  userID: String,
  user: String,
  answer: String,
})

const Answer = mongoose.model(mongo.collection3, answerSchema);

module.exports = Answer;