const mongoose = require("mongoose")

const ImageSchema = mongoose.Schema({
    image: String
    })

module.exports = mongoose.model("Image", ImageSchema);