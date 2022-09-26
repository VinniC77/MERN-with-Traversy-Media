const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const user = require('../models/userModels')

// @desc Register new user
// @desc POST /api/users
// @desc Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
// Check if the user exists
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error('User already exists')
    }



    res.json({message: 'Register user'})
})

// @desc Authenticate a user
// @desc POST /api/users/login
// @desc Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login user'})
})

// @desc Get user data
// @desc GET /api/users/me
// @desc Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User data display'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}