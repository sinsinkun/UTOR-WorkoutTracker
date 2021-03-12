const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/test_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    totalDuration: 65,
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      },
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      },
      {
        type: "resistance",
        name: "Push Press",
        duration: 20,
        weight: 125,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    totalDuration: 30,
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      },
      {
        type: "cardio",
        name: "Running",
        duration: 10,
        distance: 2
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    totalDuration: 45,
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      },
      {
        type: "cardio",
        name: "Running",
        duration: 20,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    totalDuration: 25,
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    totalDuration: 30,
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "Bench Press",
        duration: 10,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    totalDuration: 50,
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      },
      {
        type: "cardio",
        name: "Running",
        duration: 20,
        distance: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    totalDuration: 20,
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    totalDuration: 70,
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 100,
        reps: 12,
        sets: 4
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
