const config = require("config");
const mongoose = require("mongoose");
const db = config.get("mongoURI");

//making a function
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Database Connected...");
  } catch (err) {
    console.error(err.message);

    //end the process
    process.exit(1);
  }
};

module.exports = connectDB;
