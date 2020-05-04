const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

// Import Routes
const interviewsRoute = require("./routes/interviews");

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use("/interviews", interviewsRoute);

// Settings
app.set("port", process.env.PORT);

//Connect to DB
const dbSettings = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.DB_CONNECTION, dbSettings, () => {
  console.log("connected to DB");
});

// Start Server
const server = app.listen(app.get("port"), () => {
  console.log(`Server Runing http://localhost:${process.env.PORT}`);
});
