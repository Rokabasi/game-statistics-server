const Game = require('../models/game')

exports.createGame = (req,res,next) =>{
    const GameObject = JSON.parse(req.body);
    delete GameObject._id;
    const game = new Game({
        ...GameObject,
    });
  
    game.save()
    .then(() => { res.status(201).json({message: 'Game saved !'})})
    .catch(error => { res.status(400).json( { error })})
};

exports.modifyGame = (req, res, next) => {
    const GameObject = JSON.parse(req.body) ;
    Game.findOne({_id: req.params.id})
        .then( )
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.deleteGame = (req,res,next) => {
    Game.findOne({ _id: req.params.id})
    .then(game => {
                Game.deleteOne({_id: req.params.id})
                    .then(() => { res.status(200).json({message: 'Game deleted!'})})
                    .catch(error => res.status(401).json({ error }));
            });
}

exports.getOneGame = (req,res,next) => {
    Game.findOne({ _id : req.params.id })
    .then(game => res.status(200).json(game))
    .catch(error => res.status(400).json({error}));
};

exports.getAllGame = (req, res, next) => {
    Game.find()
    .then(game => res.status(200).json(game))
    .catch(error => res.status(400).json({error}));
};

