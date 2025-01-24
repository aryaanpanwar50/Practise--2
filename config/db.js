const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://aryaanpanwar:JqrXRjVkOcZpeEDH@cluster0.jeto4.mongodb.net/practise2')
        console.log("MongoDB connected")
    }catch(error){
        console.log("Failed to connect",error.message)
    }
}

module.exports = connectDB;