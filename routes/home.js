//Handle the initial GET request for the homepage
//Handles POST method request for adding a new item

const express = require("express")
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //read 
router.get('/login', homeController.getLoginPage) //read
router.get('/signup', homeController.getSignupPage) //read

router.post('/new', homeController.createItem) //create

module.exports = router