const mongoose = require('mongoose');

// const mongoURI = "mongodb://127.0.0.1:27017/points-perk";
const mongoURI = "mongodb+srv://abdulwahab:LvxREk2W7SjDsKo1@points-perk.xl7zy3m.mongodb.net/";

const connectToMongo = async () => {

  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");
  } catch(error) {
    console.log("Error connecting to MongoDB", error);
  }

}

module.exports = connectToMongo;