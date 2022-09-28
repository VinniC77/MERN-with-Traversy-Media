const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor, insira seu nome']
    },
    email: {
        type: String,
        required: [true, 'Por favor, insira um e-mail '],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Por favor, adicione uma senha']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)