const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nama: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

// Static method to Register User
userSchema.statics.signupUser = async function (nama, email, password) {

    // Validation
    if (!email || !password) {
        throw Error('Email & Password Must be Filled!')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is Not Valid!')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is Not Strong Enough!')
    }

    // const existsNama = await this.findOne({ nama })

    // if (existsNama) {
    //     throw Error('This Name already use')
    // }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already use')
    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ nama, email, password: hash })

    return user
}

userSchema.statics.loginUser = async function (email, password) {

    // Validation
    if (!email || !password) {
        throw Error('All Field Must be Filled!')
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Incorrect Email!')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect Password!')
    }

    return user
}

module.exports = mongoose.model('User', userSchema);