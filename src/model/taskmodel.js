const mongoose = require("mongoose")

const TaskModel = new mongoose.Schema({
    taskname:{
        type: String
    },
})



module.exports = mongoose.model("Tasks", TaskModel)


