const mongoose = require('mongoose');
const { mongo } = require('../config.json');

const Schema = mongoose.Schema

const sessionSchema = new Schema({
  sessionID: String,
  guildID: String,
  userID: String,
  user: String,
  score: Number,
  role: Number,
  status: Number,
  isAnswered: Number
})

const Session = mongoose.model(mongo.collection2, sessionSchema);

module.exports = Session;