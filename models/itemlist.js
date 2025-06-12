const mongoose = require('mongoose')
const itemListSchema = new mongoose.Schema({
  textinput: {
    type: String,
    required: true
  },
  numinput: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
    //no input for this field but we can set a default
  }
})

module.exports = mongoose.model('test', itemListSchema, 'uniformDB')