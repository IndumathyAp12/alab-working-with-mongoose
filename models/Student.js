const { Schema, model } = require('../config/db-connection');

const studentSchema = Schema({
  scores: [{
    type:{
    type: String,
    required: true
  },
  score:{
      score: Number,
      required: true
  }
  }],
  class_id: {
    type: Number,
    required: true
  },
  learner_id: {
    type: Number,
    required: true
  }
});

module.exports = model('Student', studentSchema);
