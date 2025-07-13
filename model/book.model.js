const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    title : String,
    author :String,
    coverImage:String,
    availability:Boolean,
    userId : String
},
   {versionKey : false}
)

const BookModel = mongoose.model("book", bookSchema)

module.exports={BookModel}

