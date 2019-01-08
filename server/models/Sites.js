const mongoose = require('mongoose');

const { Schema } = mongoose;

const sitesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a recipe name!'
  },
  url: {
    type: String,
    trim: true
  },
  stared: {
    type: Boolean
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Sites = mongoose.model('Sites', sitesSchema);

module.exports = Sites;
