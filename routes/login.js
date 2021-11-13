/***********/
/* EXPRESS */
/***********/

const express = require('express')
const loginRouter = express.Router()
const session = require('express-session')

/************/
/* PASSPORT */
/************/

const passport = require('passport')
const connectEnsureLogin = require('connect-ensure-login')

// Import model
const userModel = require('./../models/register')

// Sessions Middleware
loginRouter.use(session({
  secret: '123WBDVFALL2021',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Passport Middleware
loginRouter.use(express.urlencoded({ extended: false }));
loginRouter.use(passport.initialize());
loginRouter.use(passport.session());

// Passport Local Strategy
passport.use(userModel.createStrategy());

// To use with sessions
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());


/********************/
/* ROUTE TO SIGN UP */
/********************/

loginRouter.get('/signup', (req, res) => {
  res.redirect('/sign-up-page/signup.html')
});

loginRouter.get('/register', async (req, res) => {
  const memberList = await userModel.find()
  res.send(memberList)
})

loginRouter.post('/register', async (req, res, next) => {
  userModel.register(new userModel({username: req.body.username}), req.body.password, (err) => {
    if (err) {
      res.redirect('/sign-up-page/signup-fail.html')
    }
    res.redirect('/sign-up-page/signup-success.html')
  })
})

/*********/
/* LOGIN */
/*********/

// Route to Login Page
loginRouter.get('/login', (req, res) => {
  res.redirect('/log-in-page/login.html')
});

loginRouter.post('/login', passport.authenticate('local', { failureRedirect: '/loginfail' }),  function(req, res) {
	console.log(req.user)
	res.redirect('/admin');
});

loginRouter.get('/loginfail', (req, res) => {
  res.redirect('/log-in-page/loginfail.html')
})

/*********/
/* ADMIN */
/*********/

loginRouter.get('/admin', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.redirect('/admin');
});

// Route to Log out
loginRouter.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

module.exports = loginRouter