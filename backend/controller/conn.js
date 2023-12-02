const Chat = require('../models/chatModel')
const mongoose = require('mongoose')

const getChat = async (req, res) => {
    const chat = await Chat.find({}).sort({createdAt: -1})
    res.status(200).json(chat)
}

const newMessageREST = async (req, res) => {
    const {user, content} = req.body

    try {
        const chat = await Chat.create({user, content})
        res.status(200).json(chat)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const newMessageWS = async (message) => {
    const {user, content} = message

    try {
        const chat = await Chat.create({user, content})
    }
    catch (error) {

    }
}

const deleteMessage = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {

    }

    const chat = await Chat.findOneAndDelete({_id: id})
    if (!chat) {

    }
}

module.exports = {
    getChat,
    newMessageREST,
    newMessageWS
}