const mongoose = require("mongoose")
const Taskhistory =  mongoose.Schema({
    history:{
        type: String
    }
})


module.exports = mongoose.model("History", Taskhistory)