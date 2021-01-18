const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wily");

const repoSeed = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "jdoe@gmail.com",
    password: "password",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(repoSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
  });
