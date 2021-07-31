const mongoose = require('mongoose')

mongoose
    // .connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true })
    .connect('mongodb+srv://anusha:Feb12@cluster0.3pbui.mongodb.net/Game?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

