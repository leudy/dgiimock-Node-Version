const express = require('express')
const mongoose = require('mongoose')
const app = express();
// http-server
var bodyParser = require('body-parser')
    //var path = require('path')
var cors = require('cors')

//setting configs
app.use(cors())

const port = process.env.PORT || 9000;
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


//set controllers reponses
app.use('/dgii', require('./server/controllers/dgiiController'))
app.listen(port, () => {
    console.log(`Node server is running away on port ${port}`)
});