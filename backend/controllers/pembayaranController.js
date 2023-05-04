const Pembayaran = require("../models/pembayaranData");
const mongoose = require("mongoose");

/**
 * @param req berfungsi untuk mengambil request yang terdapat pada body
 * @param res berfungsi untuk mengembalikan response status
 * @returns status 200 untuk response berhasil atau ok
 * @method getPembayaranData berfungsi untuk mendapatkan data yang ada pada db dan
 * dikembalikan dalam bentuk json dan juga sudah di urutkan
 * 
 * Pada method ini juga menggunakan asynchronous
 */
const getPembayaranData = async (req, res) => {
    const pembayaranData = await Pembayaran.find({}).sort({ created: -1 })

    res.status(200).json(pembayaranData)
}

/**
 * @method postPembayaranData Berfungsi untuk mengirimkan data Ke DB
 * @param req berfungsi untuk mengambil request yang terdapat pada body
 * @param res berfungsi untuk mengembalikan response status
 * @returns status 200 untuk response berhasil atau ok
 * @returns status 400 untuk response gagal
 */
const postPembayaranData = async (req, res) => {
    const { namaTempat, deskripsiTempat } = req.body

    let emptyFields = [];

    // Akan Mengembalikan Pesan jika namaTempat tidak diisi
    if (!namaTempat) {
        emptyFields.push('Isi Nama Tempat Pembuangan Sampah')
    }

    // Akan Mengembalikan Pesan jika deskripsiTempat tidak diisi
    if (!deskripsiTempat) {
        emptyFields.push('Isi Deskripsi dari Tempat Pembuangan Sampah')
    }

    try {
        const pembayaranData = await Pembayaran.create({ namaTempat, deskripsiTempat })
        res.status(200).json(pembayaranData);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getPembayaranData,
    postPembayaranData
}