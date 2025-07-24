const express = require("express")
const { BookModel } = require("../model/book.model")
const {auth}  = require("../middleware/auth.mddleware")

const bookRouter = express.Router()



bookRouter.get("/",async(req,res)=>{
    try {
         const book = await BookModel.find()
        return res.status(200).json(book)
    } catch (error) {
         res.status(404).json({error:error.message})
    }    
})

bookRouter.use(auth)

bookRouter.post("/create",async(req,res)=>{
    try {
        const books =  new BookModel(req.body)
        await books.save() 
         return res.status(200).json({msg:"new book added"})
    } catch (error) {
         res.status(404).json({error:error.message})
    }
})


// mybook 

bookRouter.get("/mybook",async(req,res)=>{
    try {
         const book = await BookModel.find({userId:req.userId})
        return res.status(200).json(book)
    } catch (error) {
         res.status(404).json({error:error.message})
    }    
})

module.exports ={bookRouter}
