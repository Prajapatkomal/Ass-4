const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

const connection = mongoose.connect(process.env.MONGOURL)


module.exports = {connection}





