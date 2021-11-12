// dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const dotenv = require('dotenv').config()

// connect to database
mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create Model
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String
});

// Export Model
User.plugin(passportLocalMongoose);

const userModel = mongoose.model('userData', User);

module.exports = userModel
