const Interview = require("../models/InterviewModel");

const parseDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const parseTime = (date) => {
  return `${date.getHours()}:${date.getMinutes()}`;
};

const checkScheduleDate = (date, time) => {
  return Interview.find({ date: parseDate(date), hour: parseTime(time) });
};

// services
const findIntervieswByDate = (date) => {
  return Interview.find({ date: parseDate(date) });
};

const createInterview = async (req) => {
  const date = new Date(req.body.date);
  const time = new Date(req.body.hour);
  const interview = new Interview({
    candidate: req.body.candidate,
    date: parseDate(date),
    hour: parseTime(time),
    typeInterview: req.body.typeInterview,
  });

  const result = await checkScheduleDate(date, time);
  if (result.length > 0) {
    return Promise.reject(
      new Error("La Fecha y Hora no se encuentra disponible")
    );
  }
  try {
    const saveInterview = await interview.save();
    return saveInterview;
  } catch (error) {
    throw new Error(error);
  }
};

const interviewController = {
  createInterview,
  findIntervieswByDate,
};

module.exports = interviewController;
