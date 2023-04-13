const Help = require('../models/helpData');
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker')

// Get All Help Data
const getHelpData = async (req, res) => {
    const helpData = await Help.find({}).sort({ createdAt: -1 })

    res.status(200).json(helpData)
}

// Get a Single Help Data
const getHelpDataId = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Empty ID Data!' })
    }

    const helpData = await Help.findById(id)

    if (!helpData) {
        return res.status(400).json({ error: 'Empty Data!' })
    }

    res.status(200).json(helpData)
}

// Post a Help Data
const postHelpData = async (req, res) => {
    // const { title, description } = req.body;

    const title = faker.lorem.sentence();
    const description = faker.lorem.paragraph();

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!description) {
        emptyFields.push('description')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Tolong Isi Semua data!!', emptyFields })
    }

    try {
        const helpData = await Help.create({ title, description });
        res.status(200).json(helpData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getHelpData,
    getHelpDataId,
    postHelpData
}