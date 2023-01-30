const express = require('express')
const {signIn,signUp, getAllusers} = require('../controllers/userController')

const router = express.Router()

router.get('/signup' , signUp )
router.get('/signin', signIn)
router.post('/users', getAllusers)

module.exports = router