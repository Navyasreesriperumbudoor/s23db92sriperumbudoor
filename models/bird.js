const { Double } = require("mongodb")
const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
    bird_name: {  type: String,
        minlength:  2, 
        maxlength:  10,
        required: true },
    color: { type: String,
        required: true },
    speed:{  type: Number,
        min: 2,
        max: 20,
        required: true }
    })

module.exports = mongoose.model("bird",birdSchema)