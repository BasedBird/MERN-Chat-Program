const express = require('express')
const app = express()
const expressWS = require('express-ws')(app)
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.ws('/', function(ws, request) {

    })
    app.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`)
    })
})
.catch((error) => console.log(error))

