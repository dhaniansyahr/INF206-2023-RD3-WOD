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

const { getPembayaranData, postPembayaranData, getPembayaranDataByName } = require('../controllers/pembayaranController')



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
router.get('/pembayaran/:namaUser', getPembayaranDataByName);

// POST Data Pembayaran
router.post('/pembayaran', postPembayaranData)

module.exports = router