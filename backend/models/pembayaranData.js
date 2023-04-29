const mongoose = require('mongoose')

const pembayaranDataSchema = new mongoose.Schema({
    namaTempat: {
        type: String,
        required: true
    },
    deskripsiTempat: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('pembayaranData', pembayaranDataSchema);