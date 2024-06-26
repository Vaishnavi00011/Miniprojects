const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    name : String,
    gender : String,
    mobile : Number,
    })

module.exports = mongoose.model("Student", StudentSchema);