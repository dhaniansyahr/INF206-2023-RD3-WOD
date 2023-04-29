const express = require('express')

// Controller Function
const { signupUser, loginUser, updateDataUser, getDataUserById, getAllDataUser, getPemesananData, postPemesananData } = require('../controllers/userContorller')



const router = express.Router()

// Login Route
router.post('/login', loginUser)

// Signup Route
router.post('/signup', signupUser)

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

module.exports = router
