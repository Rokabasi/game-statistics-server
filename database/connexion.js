const mongoose = require('mongoose')

const connectDb = async () => {

    mongoose.connect("mongodb+srv://romainkabasi:muhika_13@cluster0.uw2zabe.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(() => console.log('connexion à mongoose reussie'))
        .catch(() => console.log('connexion à mongose echouée'));
}

module.exports = connectDb