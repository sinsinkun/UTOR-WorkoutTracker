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
app.get("/exercise", (req, res) => {
  console.log("GET REQUEST: exercise HTML page");
  res.sendFile("exercise.html", { root: "./public" });
})

// API routes
app.get("/api/workouts", async (req, res) => {
  console.log("GET REQUEST: get last workout");
  let data = [{},{}];
  // await db.Workout.find({}, (err,data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // })
  res.send(data);
})

app.put("/api/workouts/:id", (req, res) => {
  console.log("PUT REQUEST: add new exercise to id", req.params.id);
  console.log(req.body);
  // ...
})

app.post("/api/workouts", (req, res) => {
  console.log("POST REQUEST: add new workout");
  console.log(req.body);
  // ...
})

app.get("/api/workouts/range", (req, res) => {
  console.log("GET REQUEST: add new workout");
  // ???
})

app.listen(8080, () => {
  console.log('Opened server at localhost:8080');
})