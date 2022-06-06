const mongoose = require('../config/db');

const schema = new mongoose.Schema({
    email: {
        desc: "The user's email address",
        trim: true,
        type: String,
        unique: true,
        required: true
    },
    password: {
        desc: 'user password',
        trim : true,
        type: String,
        required: true,
        select : false
    },
    name: {
        desc: "The user's name",
        trim: true,
        required: true,
        type: String,
    },
    age: {
        desc: 'The user`s age',
        type: Number,

    },
    gender: {
        desc: 'user gender',
        trim: true,
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true
    },
    isActive: {
        desc: 'is Active',
        type: Boolean,
        default: true,
        required: true
    },
    userType: {
        desc: "user roles",
        trim : true,
        type: String,
        enum: ["Admin", "User"],
        default: "Admin",
        required: true
    },
    

}, {
    versionKey: false,
    timestamps: {createdAt: "createdAt", updatedAt: "updatedAt" }
});

module.exports = mongoose.model('Users', schema)