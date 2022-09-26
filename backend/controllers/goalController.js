const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @des    Essa função serve para LER (get) os objetivos
// @route  Essa função terá o método GET/api/goals
// @access Esse função terá acesso privado
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

     res.status(200).json(goals)
})

// @des    Essa função serve para EDITAR (set) o objetivo
// @route  Essa função terá o método POST/api/goals
// @access Esse função terá acesso privado
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
        const goal = await Goal.create({
            text: req.body.text
        })

    res.status(200).json(goal)
})

// @des    Essa função serve para ATUALIZAR (update) o objetivo
// @route  Essa função terá o método PUT/api/goals/:id
// @access E sse função terá acesso privado
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// @des    Essa função serve para APAGAR (delete) o objetivo
// @route  Essa função terá o método DELETE/api/goals/:id
// @access Esse função terá acesso privado
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
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