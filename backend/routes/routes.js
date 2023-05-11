const express = require('express');
const { getPemesananData, getPembayaranData, getDataUserId, createDataUser, deleteDataUser, updateDataUser } = require('../controllers/dataController');
const { getHelpData, postHelpData, getHelpDataId } = require('../controllers/helpController');
const { getPemprosesan, getPemprosesanByName } = require('../controllers/pemprosesanController')


const router = express.Router();

// Get All Data
router.get('/pemesanan', getPemesananData)
router.get('/pembayaran', getPembayaranData)
router.get('/pemprosesan', getPemprosesan)
router.get('/help/', getHelpData)

// GET Single Data
router.get('/:id', getDataUserId)
router.get('/pemprosesan/:namaDriver', getPemprosesanByName)


// POST a new Data
router.post('/', createDataUser)

// DELETE a Data 
router.delete('/:id', deleteDataUser)

// UPDATE a Data
router.patch('/:id', updateDataUser)

// get All Data Help

// POST a new Data Help
router.post('/help', postHelpData)

// GET Single Data Help
router.get('/help/:id', getHelpDataId)


module.exports = router;