const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
        type : String,
        required :  [true,"It is required"]
    },
    author:{
        type : String,
        required :  [true,"It is required"],
    },
    genre:{
        type : String,
        required :  [true,"It is required"],
    },
    year:{
        type : Date,
        required :  [true,"It is required"],
    },
    available:{
        type: Boolean,
        required : [true,"It is required"],
    },
})

module.exports = mongoose.model("Book",bookSchema)