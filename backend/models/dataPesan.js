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
    }
}, { timestamps: true })

module.exports = mongoose.model('dataPesan', dataPesanSchema);
