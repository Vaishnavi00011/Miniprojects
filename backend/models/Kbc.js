const mongoose = require("mongoose")

const KbcSchema = mongoose.Schema({
    Questions : String,
    OptionA : String,
    OptionB : String,
    OptionC : String,
    OptionD : String,
    Answer : String

    })

module.exports = mongoose.model("Kbc", KbcSchema);