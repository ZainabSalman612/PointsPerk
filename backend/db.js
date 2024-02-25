const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/points-perk";

const connectToMongo = async () => {

  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");
  } catch(error) {
    console.log("Error connecting to MongoDB", error);
  }

}

module.exports = connectToMongo;