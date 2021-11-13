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

const subSchema = new mongoose.Schema({
  name: String,
  email: String
})

// Compile schema

const Subscribe = mongoose.model('team-member', memberSchema)

module.exports = Subscribe