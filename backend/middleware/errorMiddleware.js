// Middlewares são funções que são executadas quando fizemos um request

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    // Se o status for o mesmo do controller, o statusCode recebe esse status,
    // se não, o status recebe 500 (que é o código de erro quando ocorre um erro no servidor)

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}