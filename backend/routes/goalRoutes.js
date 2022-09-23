const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')


router.get('/', getGoals)
router.post('/', setGoal)
// Como a rota é a mesma, essa é uma forma de encurtar ainda mais a parte do código:
// router.route('/').get(getGoals).post(setGoal)

router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)
// Como a rota é a mesma, essa é uma forma de encurtar ainda mais a parte do código:
// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router