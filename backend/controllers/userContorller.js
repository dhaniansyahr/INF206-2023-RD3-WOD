const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

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

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Register User
const signupUser = async (req, res) => {
    const { nama, email, password } = req.body;

    try {
        const user = await User.signupUser(nama, email, password)

        // Create Token After Save to the DB
        const token = createToken(user._id)

        res.status(200).json({ nama, email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    loginUser,
    signupUser
}