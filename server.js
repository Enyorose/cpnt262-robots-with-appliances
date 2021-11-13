/******************/
/* Import Modules */
/******************/

const express = require('express')
const app = express()
const router = require('./routes/api')
const teamRouter = require('./routes/team')
const loginRouter = require('./routes/login')


// Use middleware for index page
app.use(express.static('public'))

// Load routes
app.use('/api', router, teamRouter)
app.use('/', loginRouter)

/****************************/
/* Handle 404, start server */
/****************************/

// ERROR handlers for API or HTML
app.use((req, res) => {
  if(req.url.startsWith('/api')){
    res.status(404)
    res.send({ error: 'File Not Found'})
  } else {
      res.status(404)
      res.redirect('/404-page/404.html')
  }
})

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

