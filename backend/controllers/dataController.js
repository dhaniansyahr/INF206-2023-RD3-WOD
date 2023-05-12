const User = require('../models/userModel');
const Help = require('../models/helpData');
const Pemesanan = require('../models/pemesananData');
const Pembayaran = require('../models/pembayaranData');
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker')

// Get All Data User
const getPemesananData = async (req, res) => {
    const dataUser = await Pemesanan.find({}).sort({ createdAt: -1 })

    res.status(200).json(dataUser)
}

const getPembayaranData = async (req, res) => {
    const pembayaranData = await Pembayaran.find({}).sort({ created: -1 })

    res.status(200).json(pembayaranData)
}

// Get a Single Data User
const getDataUserId = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Empty ID Data!' })
    }

    const dataUser = await User.findById(id)

    if (!dataUser) {
        return res.status(400).json({ error: 'Empty Data!' })
    }

    res.status(200).json(dataUser)
}

// Create New Data User
const createDataUser = async (req, res) => {
    // const { nama, email, password } = req.body;
    const nama = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    let emptyFields = []

    if (!nama) {
        emptyFields.push('nama')
    }
    if (!email) {
        emptyFields.push('email')
    }
    if (!password) {
        emptyFields.push('password')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Tolong Isi Semua data!!', emptyFields })
    }

    try {
        const dataUser = await User.create({ nama, email, password });
        res.status(200).json(dataUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a Data User
const deleteDataUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Empty ID Data!' })
    }

    const dataUser = await User.findOneAndDelete({ _id: id })

    if (!dataUser) {
        return res.status(400).json({ error: 'Id Not Found!' })
    }

    res.status(200).json(dataUser)
}

// Update a Data User
const updateDataUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Empty ID Data!' })
    }

    // Slice atau destructing request body untuk memperbaharui data yang ada di db dalam bentuk obejct
    const dataUser = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!dataUser) {
        return res.status(400).json({ error: 'Id Not Found!' })
    }

    res.status(200).json(dataUser)
}



module.exports = {
    getPemesananData,
    getPembayaranData,
    getDataUserId,
    createDataUser,
    deleteDataUser,
    updateDataUser
}