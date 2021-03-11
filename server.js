const express = require('express');
const app = express();

const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/test_db", 
{ useNewUrlParser: true, useFindAndModify: false });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// HTML routes
app.get("/exercise", (req,res) => {
  console.log("GET REQUEST: exercise HTML page");
  res.sendFile("exercise.html", { root:"./public" });
})

// API routes
app.get("/api/workouts", (req,res) => {
  console.log("GET REQUEST: get last workout");
})

// db.Workout.find({}, (err,data) => {
//   if (err) console.log(err);
//   else console.log(data);
// })

app.listen(8080, () => {
  console.log('Opened server at localhost:8080');
})