const express = require('express')
const userctrl = require('../controllers/game')

const router = express.Router()

router.get('/', userctrl.getAllGame)
router.post('/' , userctrl.createGame )
router.get('/:id', userctrl.getOneGame)
router.post('/:id', userctrl.deleteGame)
router.put('/:id', userctrl.modifyGame)

module.exports = router