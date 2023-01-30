const express = require('express')
const {signIn,signUp, getAllusers} = require('../controllers/userController')

const router = express.Router()

router.post('/signup' , signUp )
router.get('/signin', signIn)
router.get('/users', getAllusers)

module.exports = router