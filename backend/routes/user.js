// user.js
const express = require('express')

// Controller Function
const {
    signupUser,
    loginUser,
    updateDataUser,
    getDataUserById,
    getAllDataUser,
    getPemesananData,
    postPemesananData,
    signupDriver,
} = require('../controllers/userContorller')

const { getPembayaranData, postPembayaranData } = require('../controllers/pembayaranController')

const { getPesanDataByTempatKerja, postPesanData, getPesanDataByName } = require('../controllers/dataPesanController')

const { getPemprosesan, postPemprosesan, updatePemprosesan, getPemprosesanByName, getRiwayatByName } = require('../controllers/pemprosesanController')


const router = express.Router()

// Login Route
router.post('/login', loginUser)

// Signup Route
router.post('/signup', signupUser)

// Signup Route
router.post('/signup-driver', signupDriver)

// Update Data User 
router.patch('/:id', updateDataUser)

// GET Data User By Id 
router.get('/:id', getDataUserById)

// GET All Data User 
router.get('/', getAllDataUser)

// GET All Data Pemesanan
router.get('/pemesanan/', getPemesananData);

// POST Data Pemesanan
router.post('/pemesanan', postPemesananData)

// GET All Data Pembayaran
router.get('/pembayaran/', getPembayaranData);

// POST Data Pembayaran
router.post('/pembayaran', postPembayaranData)

// GET Data Pesan By Tempat Kerja
router.get('/pesan/:tempatKerja', getPesanDataByTempatKerja);
router.get('/pesan-nama/:nama', getPesanDataByName);

// POST Data Pesan
router.post('/pesan', postPesanData)

// GET Data Pemprosesan
router.get('/pemprosesan/', getPemprosesan);
router.get('/pemprosesan/:namaUser', getPemprosesanByName)
router.get('/riwayat-pemesanan/:namaDriver', getRiwayatByName)

// POST Data Pemprosesan
router.post('/pemprosesan', postPemprosesan)

// UPDATE Data Pemprosesan
router.patch('/pemprosesan/:namaUser', updatePemprosesan)

module.exports = router