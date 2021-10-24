const mongoose = require('../database');

const OngsSchema = new mongoose.Schema({
    image: [

    ],
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cause: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    address: {
        type: String,
        required: true,
    }
})

const Ongs = mongoose.model('Ongs', OngsSchema);

module.exports = Ongs;