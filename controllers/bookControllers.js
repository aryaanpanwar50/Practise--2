const Book = require('../models/bookModel');

const createBooks =async(req,res)=>{
    
    try{
        const {title,author,genre,year,available} = req.body
        const filteredBook = await Book.findOne({title})
        if(filteredBook){
            return res.status(400).send("User already exists")
        }
        const book = new Book({
            title,
            author,
            genre,
            year,
            available,

        })
        await book.save();
        res.status(201).json({messgae:"Book addded"})

    }catch(error){
        return res.status(500).send(error.message)
    }
}

const getBooks = async(req,res)=>{
     try{
        const books = await Book.find();
        res.status(200).json({data:books})
     }catch(error){
        res.status(500).send(error.message)
     }
}

const getBooksById =async()=>{

    try{
        const id =  req.params.id;
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).json({messgae:"Book not found"});
        }
        res.status(200).json({data:book})
    }catch(error){
        res.status(500).send(error.message)
    }
}

const updateBook = async(req,res)=>{
    try{
        const books = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send(books)

    }catch(error){
        res.status(500).send(error.message)
    }
}

const deleteBook = async(req,res)=>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id,req.body);
        if(!book){
            return res.status(404).send("Book already deleted")
        }
        res.status(200).json({message:"Book is deleted"})

    }catch(error){
       return res.status(500).send(error.message)
    }
}

module.exports = {
    createBooks,
    getBooks,
    getBooksById,
    updateBook,
    deleteBook
}