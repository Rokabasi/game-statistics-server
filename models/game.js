const mongoose = require('mongoose')
require('mongoose-double')(mongoose)

const gameSchema = new mongoose.Schema({
    home : { type : String, require : true},
    away : { type : String},
    halftime : { type : Number},
    overtwohalftime : { type : Number, require : true},
    overalltime : { type : Number},
    resultoverhalftime : {type : String},
    resultprono : {type : Boolean}
})

module.exports = mongoose.model('game', gameSchema)