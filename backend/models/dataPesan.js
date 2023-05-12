const mongoose = require('mongoose')

const dataPesanSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    tempatKerja: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('dataPesan', dataPesanSchema);