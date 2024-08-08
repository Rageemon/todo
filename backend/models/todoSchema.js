const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        immutable:true  
    },
    description: {
        type: String,
        require: false
    }
    
})


module.exports = mongoose.model("ToDo",todoSchema);