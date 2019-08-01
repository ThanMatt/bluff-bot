const mongoose = require('mongoose');
const { mongo } = require('../config.json');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  number: Number,
  question: String,
  correctAnswer: String
});

const Question = mongoose.model(mongo.collection1, questionSchema);

module.exports = Question;