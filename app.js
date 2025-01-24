const connectDB = require('./config/db')
const express = require('express')
const router = require('./routes/bookRoutes')
const app = express();

app.use(express.json())
app.use('/books',router)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(3000,async()=>{
    try{
        await connectDB();
    }catch(error){
        console.log("Failed",error)
    }
    console.log("Server is running on port 3000")
})