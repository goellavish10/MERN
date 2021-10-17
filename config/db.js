const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongo_uri");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    // Exit process with fdailure
    process.exit(1);
  }
};

module.exports = connectDB;
