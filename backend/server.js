const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api')
require('dotenv').config()

const PORT = process.env.PORT

const io = new Server( server, {
    cors: {
      origin: `http://pongcord.mooo.com:3000`,
      methods: ["GET", "POST"],
    }
})

app.use((req, res, next) => {
    console.log(req.path + " " + req.method)
    next()
})

app.use(cors())
app.use(express.json())
app.use('/api/', apiRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`)
    })

    // io.on('connection', (socket) => {
    //     console.log('user connected!')
    //     socket.on('new_message', (data) => {
    //         io.emit('recieved_message', data)
    //     })
    // })
    
    // server.listen(3001, () => {
    //     console.log('WS server running')
    // })
})
.catch((error) => console.log(error))


