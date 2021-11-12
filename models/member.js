/***********************/
/* Connect to Database */
/***********************/

const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });

/****************************/
/* Read array from database */
/****************************/

// Define schema

const memberSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  description: String,
  title: String,
  bio: String,
  github: String,
  fullName: String
})

// Compile schema

const teamMembers = mongoose.model('team-member', memberSchema)

module.exports = teamMembers