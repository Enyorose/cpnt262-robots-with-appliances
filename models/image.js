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

const imageSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  imageSrc: String,
  width: String,
  height: String,
  category: String
})

// Compile schema

const Images = mongoose.model('image', imageSchema)

module.exports = Images