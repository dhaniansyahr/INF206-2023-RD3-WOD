const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Pemesanan = require('../models/pemesananData');
const bcrypt = require('bcrypt');


// Create Token 
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.loginUser(email, password)

        // Create Token After Save to the DB
        const token = createToken(user._id)

        res.status(200).json({ email, nama: user.nama, id: user._id, no_hp: user.no_hp, alamat: user.alamat, tempatKerja: user.tempatKerja, harga: user.harga, role: user.role, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Register User
const signupUser = async (req, res) => {
    const { nama, email, password, role } = req.body;

    try {
        const user = await User.signupUser(nama, email, password, role)

        // Create Token After Save to the DB
        const token = createToken(user._id)

        res.status(200).json({ nama, email, role })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const signupDriver = async (req, res) => {
    const { nama, email, password, role, no_hp, alamat, tempat_lahir, tanggal_lahir, tempatKerja, harga, KTP, SIM, STNK, SKCK } = req.body;

    try {
        const user = await User.signupDriver(nama, email, password, role, no_hp, alamat, tempat_lahir, tanggal_lahir, tempatKerja, harga, KTP, SIM, STNK, SKCK)

        // Create Token After Save to the DB
        const token = createToken(user._id)

        res.status(200).json({ nama, email, role })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



// Get All Data User
const getAllDataUser = async (req, res) => {
    const dataUser = await User.find({}).sort({ createdAt: -1 })

    res.status(200).json(dataUser)
}


// GET data User by ID
const getDataUserById = async (req, res) => {
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

// Update User Data
const updateDataUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Empty ID Data!' })
    }

    // Enkripsi password baru jika ada
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword
    }

    // Slicing data from req.body untuk memperbaharuui data yang ada di DB dalam bentuk object
    const dataUser = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    // Jika data user tidak ditemukan maka akan mengembalikan error
    if (!dataUser) {
        return res.status(400).json({ error: 'Id Not Found!' })
    }

    // Jika data user ditemukan maka akan mengembalikan data user yang telah diperbaharui
    res.status(200).json(dataUser)
}

/**
 * @param req berfungsi untuk mengambil request yang terdapat pada body 
 * @param res berfungsi untuk mengembalikan response status 
 * @returns status 200 untuk response berhasil atau ok
 * @method getPemesananData berfungsi untuk mendapatkan data yang ada pada db dan 
 * dikembalikan dalam bentuk json dan juga sudah di urutkan
 * 
 * Pada method ini juga menggunakan asynchronous 
 */
const getPemesananData = async (req, res) => {
    const pemesanan = await Pemesanan.find({})

    res.status(200).json(pemesanan)
}

/**
 * @method postPemesananData Berfungsi untuk mengirimkan data Ke DB
 * @param req berfungsi untuk mengambil request yang terdapat pada body 
 * @param res berfungsi untuk mengembalikan response status  
 */
const postPemesananData = async (req, res) => {
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
        const pemesananData = await Pemesanan.create({ namaTempat, deskripsiTempat })
        res.status(200).json(pemesananData);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    loginUser,
    signupUser,
    updateDataUser,
    getDataUserById,
    getAllDataUser,
    getPemesananData,
    postPemesananData,
    signupDriver
}