// Import model
const Subscribe = require('./../models/subscriber')

// Use Express router
const express = require('express')
const subRouter = express.Router()

subRouter.use(express.urlencoded({ extended: true }));

// GET request for entire gallery
subRouter.get('/subscriber', async (req, res) => {
  
  try {
    const subscriberModel = await Subscribe.find()
    res.send(subscriberModel)
  } catch {
    res.status(404).send({error: 'File Not Found'})
  }
})


// GET request for individual gallery items
subRouter.get('/subscriber/:name', async (req, res) => {
  
  try {
    const subscriberName = await Subscribe.findOne({ name: req.params.name })
    if(subscriberName === null) {
      throw new Error('File Not Found')
    }
    res.send(subscriberName)
  } catch(err) {
    res.status(404).send({error: 'File Not Found'})
  }
})

subRouter.post('/subscriber', async (req, res) => {

  try {
    const newSub = new Subscribe(req.body)
  
    await newSub.save()
  
    console.log(newSub)
    res.redirect('/subscribe-page/success.html')

  } catch(err) {

    console.log(err)
    res.redirect('/subscribe-page/fail.html')
    
  }
})


// export module
module.exports = subRouter