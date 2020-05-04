const express = require("express");
const {
  createInterview,
  findIntervieswByDate,
} = require("../controllers/InterviewController");

const router = express.Router();

router.get("/:date", async (req, res) => {
  const date = new Date(req.params.date);
  const interviews = await findIntervieswByDate(date);
  res.status(200).json(interviews);
});

router.post("/", async (req, res) => {
  try {
    const saveInterview = await createInterview(req);
    res.status(200).json(saveInterview);
  } catch (error) {
    console.log(error.message);
    const errorMessage = { message: error.message };
    res.status(404).json({ errorMessage });
  }
});

module.exports = router;
