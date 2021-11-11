// Import model
const teamMembers = require('./../models/member')

// Use Express router
const express = require('express')
const teamRouter = express.Router()

// GET request for entire gallery
teamRouter.get('/member', async (req, res) => {
  
  try {
    const members = await teamMembers.find()
    res.send(members)
  } catch {
    res.status(404).send({error: 'File Not Found'})
  }
})


// GET request for individual gallery items
teamRouter.get('/member/:name', async (req, res) => {
  
  try {
    const member = await teamMembers.findOne({ id: req.params.name })
    if(!member) {
      throw new Error('File Not Found')
    }
    res.send(member)
    console.log(member)
  } catch(err) {
    res.status(404).send({error: 'File Not Found'})
  }
})


// export module
module.exports = teamRouter