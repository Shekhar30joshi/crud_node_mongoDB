const mongoose = require("mongoose");
//connection

async function makeConnection() {
  return mongoose
    .connect("mongodb://localhost:27017/firstDB")
    .then(() => {
      console.log("mongo db connected");
    })
    .catch((err) => {
      console.log("mongodb error occured", err);
    });
}

module.exports = { makeConnection };
