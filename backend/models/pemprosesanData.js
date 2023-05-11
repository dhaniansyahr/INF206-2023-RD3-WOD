const mongoose = require('mongoose')

const pemprosesanDataSchema = new mongoose.Schema({
    namaUser: {
        type: String,
    },
    namaDriver: {
        type: String,
    },
    alamatUser: {
        type: String,
    },
    alamat: {
        type: String,
    },
    harga: {
        type: String,
    },
    metodePembayaran: {
        type: String,
    },
    status: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model('pemprosesanData', pemprosesanDataSchema);