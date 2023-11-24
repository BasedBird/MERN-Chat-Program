const Chat = require('../models/chatModel')
const mongoose = require('mongoose')

const getChat = async (req, res) => {
    const chat = await Chat.find({}).sort({createdAt: -1})
    res.status(200).json(chat)
}

const newMessage = async (message) => {
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