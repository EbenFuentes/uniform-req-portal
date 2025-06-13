//todo - Declare Variables
const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

const app = express()

// Passport config
require('./config/passport')(passport)



const PORT = process.env.PORT || 8000


  //*Import functions/routes
  const connectDB = require("./config/database")
  const homeRoutes = require("./routes/home")
  const editRoutes = require("./routes/edit")
  const usersRoutes = require('./routes/users')
  const indexRoutes = require('./routes/index')

  require('dotenv').config({path: './config/.env'})

//todo - Connect to Database
connectDB()

//todo - Set Middleware
app.use(expressLayouts)
app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: false}))

// Express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

// Connect flash
app.use(flash())

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})



//todo - Set Routes
app.use('/', indexRoutes)
app.use('/edit', editRoutes)
app.use('/users', usersRoutes)

//todo - Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))