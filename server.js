const express = require('express');
const app = express();

const mongoose = require("mongoose");
const db = require("./models");
// connect to mongoDB via mongoose
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/test_db",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// HTML route: exercise.html
app.get("/exercise", (req, res) => {
  console.log("GET REQUEST: exercise HTML page");
  res.sendFile("exercise.html", { root: "./public" });
})

// API route: get last workout
app.get("/api/workouts", async (req, res) => {
  console.log("GET REQUEST: get last workout");
  let output = [{},{}];
  await db.Workout.find({}, (err,data) => {
    if (err) console.log(err);
    else output = data;
  })
  for (let i=0; i<output.length; i++) {
    console.log("day:", output[i].day);
    console.log("exercises:", output[i].exercises);
  }
  res.send(output);
})

// API route: add new exercise to id
app.put("/api/workouts/:id", async (req, res) => {
  console.log("PUT REQUEST: add new exercise to id", req.params.id);
  console.log(req.body);
  if (req.params.id && req.params.id !== "undefined") {
    const oldData = await db.Workout.findById(req.params.id);
    const newDuration = oldData.totalDuration + req.body.duration;
    await db.Workout.updateOne({_id:mongoose.Types.ObjectId(req.params.id)}, {
      $push: {exercises: req.body}, $set: {totalDuration:newDuration}
    })
    res.send({ message: "success"});
  }
  else res.send({ message: "failed" });
})

// API route: add new workout document
app.post("/api/workouts", async (req, res) => {
  console.log("POST REQUEST: add new workout");
  console.log(req.body);
  const newWorkout = await new db.Workout(req.body).save();
  console.log(newWorkout);
  res.send(newWorkout);
})

// API route: get workouts in range
app.get("/api/workouts/range", (req, res) => {
  console.log("GET REQUEST: get workouts in range");
  let data = {};
  // ???
  res.send(data);
})

// start server
app.listen(8080, () => {
  console.log('Opened server at localhost:8080');
})