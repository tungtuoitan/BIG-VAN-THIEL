const mongoose = require('mongoose');
const uri = "mongodb+srv://ngovantaino2003:xDDr3sJkQeCzdO1o@tungproject.tmy5mxv.mongodb.net/shop_app?retryWrites=true&w=majority&appName=TungProject";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

module.exports = connectDB;