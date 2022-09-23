const asyncHandler = require('express-async-handler')

// @des    Essa função serve para LER (get) os objetivos
// @route  Essa função terá o método GET/api/goals
// @access Esse função terá acesso privado
const getGoals = asyncHandler((req, res) => {
     res.status(200).json({message: 'Everything is OK with GET'})
})

// @des    Essa função serve para EDITAR (set) o objetivo
// @route  Essa função terá o método POST/api/goals
// @access Esse função terá acesso privado
const setGoal = asyncHandler((req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set a goal'})
})

// @des    Essa função serve para ATUALIZAR (update) o objetivo
// @route  Essa função terá o método PUT/api/goals/:id
// @access E sse função terá acesso privado
const updateGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @des    Essa função serve para APAGAR (delete) o objetivo
// @route  Essa função terá o método DELETE/api/goals/:id
// @access Esse função terá acesso privado
const deleteGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}

// Como temos somente o error handler o asyncHandler que importamos da biblioteca do express substitui o .then e .catch que precisamos, obrigatoriamente 
// utilizar quando fizemos uma consulta a um banco de dados, como será o caso nessa aplicação.
// Usamos esse novo elemento imporatado envolvendo a função inteira nele.