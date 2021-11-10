// Import model
const Images = require('./../models/image')

// Use Express router
const express = require('express')
const router = express.Router()

// GET request for entire gallery
router.get('/images', async (req, res) => {
  
  try {
    const imagesGallery = await Images.find()
    res.send(imagesGallery)
  } catch {
    res.status(404).send({error: 'File Not Found'})
  }
})


// GET request for individual gallery items
router.get('/images/:id', async (req, res) => {
  
  try {
    const imagesID = await Images.findOne({ id: req.params.id })
    if(imagesID === null) {
      throw new Error('File Not Found')
    }
    res.send(imagesID)
  } catch(err) {
    res.status(404).send({error: 'File Not Found'})
  }
})


// export module
module.exports = router