// Aqui vamos conectar o banco de dados através do Mongoose.
const mongoose = require('mongoose')

// Todos os métodos do mongoose retornam uma promise, então devemos utilizar o async
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline) // Cyan vem de colors package que importamos
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB