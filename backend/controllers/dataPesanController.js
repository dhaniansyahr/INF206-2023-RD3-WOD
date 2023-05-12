const Pesan = require('../models/dataPesan');
const mongoose = require('mongoose');

const getPesanDataByTempatKerja = async (req, res) => {
    const { tempatKerja } = req.params;

    try {
        const data = await Pesan.find({ tempatKerja: tempatKerja, status: false }).sort({})
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getPesanDataByName = async (req, res) => {
    const { nama } = req.params;

    try {
        const data = await Pesan.find({ nama: nama }).sort({})
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const postPesanData = async (req, res) => {
    const { nama, alamat, tempatKerja } = req.body;

    try {
        const newData = await Pesan.create({ nama, alamat, tempatKerja })
        res.status(201).json(newData)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updatePesanData = async (req, res) => {
    const { nama } = req.params;

    const data = await Pesan.findOneAndUpdate({ nama: nama }, {
        ...req.body
    })

    if (!data) {
        res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json({ message: 'Data updated' });
}

module.exports = { getPesanDataByTempatKerja, postPesanData, getPesanDataByName, updatePesanData }