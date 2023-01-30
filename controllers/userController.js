const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signUp = (req,res,next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User ({    
                username : req.body.username,
                email : req.body.email,
                password : hash
            });
        user.save()
            .then(() => res.status(201).json({message : 'new user saved'}))
            .catch(error => 
                res.status(400).json({error}));
            })       
        .catch(error => res.status(400).json({error}))
};
  
        

exports.signIn = (req,res,next) =>{
    User.findOne({email : req.body.email})
    .then(user => {
        if(!user){
            return res.status(401).json({message:'Identifiant ou Mot de passe invalide '})
        }
            bcrypt.compare(req.body.password, user.password)
            .then(valid =>{
                if(!valid){
                    return req.status(401).json({message : 'Identifiant ou Mot de passe invalide '})
                }
                    res.status(200).json({
                        userId : user._id,
                        token : jwt.sign(
                            
                            { userId : user._id},
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn :'12h'}
                        )
                    })

                })

                .catch(error => { req.status(500).json({error})})
            })
        }
   
// }

exports.getAllusers = (req,res,next) =>{
    User.find()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({error}))
}