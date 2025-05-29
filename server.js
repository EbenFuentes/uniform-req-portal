//todo - Declare Variables
const express = require("express");
const app = express()
const PORT = 8000


  //*Import functions/routes
  const connectDB = require("./config/database")
  const homeRoutes = require("./routes/home")
  const editRoutes = require("./routes/edit")

  require('dotenv').config({path: './config/.env'})

//todo - Connect to Database
connectDB()

//todo - Set Middleware
app.set("view engines", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

//todo - Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

//todo - Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))