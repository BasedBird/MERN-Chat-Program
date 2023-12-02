const express = require('express')
const router = express.Router()
const {
    getChat,
    newMessageREST
} = require('../controller/conn')

router.post('/', newMessageREST)

router.get('/', getChat)

module.exports = router