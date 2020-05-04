const mogoose = require("mongoose");

const InterviewSchema = mogoose.Schema({
  candidate: { type: Object, required: true },
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  typeInterview: {
    type: String,
    required: true,
  },
});

module.exports = mogoose.model("Interviews", InterviewSchema);
