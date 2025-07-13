const express = require("express")
const connection = require("./db.js")
const app = express()
app.use(express.json())
const {userRouter} = require("./routes/user.route")
const {bookRouter} = require("./routes/book.route")
const dotenv = require("dotenv")
dotenv.config()

PORT = process.env.PORT || 3000

app.use("/user",userRouter)
app.use("/book",bookRouter)


app.listen(PORT,async()=>{
     await connection
     console.log(`server in running on port ${PORT}`)
})