const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {type: String, required:true },
    genre: {type: String},
    director: {type: String, required:true},
    runTime: {type: Number}
})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie