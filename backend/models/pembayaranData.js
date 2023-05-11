const mongoose = require('mongoose')

const pembayaranDataSchema = new mongoose.Schema({
    namaTempat: {
        type: String,
        required: true
    },
    deskripsiTempat: {
        type: String,
    },
    namaDriver: {
        type: String,
    },
    harga: {
        type: String,
    },
    namaUser: {
        type: String,
    },
    alamatUser: {
        type: String,
    },
    metodePembayaran: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model('pembayaranData', pembayaranDataSchema);
