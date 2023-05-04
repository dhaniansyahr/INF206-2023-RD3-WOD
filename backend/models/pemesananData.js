const mongoose = require('mongoose')

const pemesananDataSchema = new mongoose.Schema({
    namaTempat: {
        type: String,
        required: true
    },
    deskripsiTempat: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('pemesananData', pemesananDataSchema);