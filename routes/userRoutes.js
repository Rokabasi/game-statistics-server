const express = require('express')
const passport = require('passport')
const {signIn,signUp, getAllusers, google} = require('../controllers/userController')

const router = express.Router()

router.post('/signup' , signUp )
router.get('/signin', signIn)
router.get('/google',passport.authenticate('google',{
    scope:['profile'],
}))
router.get('/users', getAllusers)

module.exports = router