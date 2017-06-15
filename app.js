const express = require('express')
let router = express.Router()
const dispatch = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
let notificationRouter  = require('./routes/notificationroutes')
require('dotenv').config()

let db = mongoose.connect(process.env.DB)

dispatch.use(bodyParser.urlencoded({extended:true}))
dispatch.use(bodyParser.json())
let NRoutes = new notificationRouter
 NRoutes.getRoutes(express,router)
dispatch.use('/dispatch/',router)

dispatch.get('/', (req,res) => {
  res.send('welcome to dispatch api')
})


dispatch.get('/dispatch', (req,res) => {
  
})


dispatch.listen(process.env.PORT, () => {
    console.log('dispatch listening on port 3000')
})


