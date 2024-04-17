// FAQ.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
