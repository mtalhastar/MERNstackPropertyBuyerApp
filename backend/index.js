/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */
require('dotenv').config()
const express = require('express')
const dbStart = require('./dbHandler/dbconfig')

// const router = require('router')
const bodyParser = require('body-parser')

const app = express()

dbStart()
const port = process.env.PORT ||8000
// Adding a Router
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/property', require('./routes/properties'));
//app.use('/buyerinfo', require('./routes/information'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

