const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({ g_id: String, g_name: String });
const User = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        games: [gameSchema]
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)