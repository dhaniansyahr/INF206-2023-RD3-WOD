const Pemprosesan = require('../models/pemprosesanData');
const mongoose = require('mongoose');

const getPemprosesan = async (req, res) => {
    try {
        const pemprosesan = await Pemprosesan.find({}).sort({ createdAt: -1 })
        res.status(200).json(pemprosesan)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getPemprosesanByName = async (req, res) => {
    const { namaDriver } = req.params;

    try {
        const pemprosesan = await Pemprosesan.find({ namaDriver: namaDriver, status: "Belum Dikonfirmasi" })
        res.status(200).json(pemprosesan)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getRiwayatByName = async (req, res) => {
    const { namaDriver } = req.params;

    try {
        const pemprosesan = await Pemprosesan.find({ namaDriver: namaDriver, status: "Dikonfirmasi" })
        res.status(200).json(pemprosesan)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


// POST data Pemprosesan
const postPemprosesan = async (req, res) => {
    const { namaUser, namaDriver, alamatUser, alamat, harga, status, metodePembayaran } = req.body;

    try {
        const pemprosesan = await Pemprosesan.create({ namaUser, namaDriver, alamatUser, alamat, harga, status, metodePembayaran })

        res.status(201).json(pemprosesan)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// UPDATE data Pemprosesan
const updatePemprosesan = async (req, res) => {
    const { namaUser } = req.params;

    const data = await Pemprosesan.findOneAndUpdate({ namaUser: namaUser }, {
        ...req.body
    })

    if (!data) {
        res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json({ message: 'Data updated' });
}

module.exports = {
    getPemprosesan,
    postPemprosesan,
    updatePemprosesan,
    getPemprosesanByName,
    getRiwayatByName
}