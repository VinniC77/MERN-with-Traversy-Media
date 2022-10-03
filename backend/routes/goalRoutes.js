const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')


router.get('/', protect, getGoals)
router.post('/', protect, setGoal)
// Como a rota é a mesma, essa é uma forma de encurtar ainda mais a parte do código:
// router.route('/').get(getGoals).post(setGoal)

router.put('/:id', protect, updateGoal)
router.delete('/:id', protect, deleteGoal)
// Como a rota é a mesma, essa é uma forma de encurtar ainda mais a parte do código:
// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router