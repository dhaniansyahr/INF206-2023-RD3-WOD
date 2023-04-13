const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

    const existsNama = await this.findOne({ nama })

    if (existsNama) {
        throw Error('Email already ese')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already ese')
    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema);