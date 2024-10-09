const mongoose = require('mongoose')
require("dotenv").config()
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connection successful"))
    .catch(() => {
        console.log("Issue in DB Connection")
        console.error(error.message)
        //iska matlab kya hai
        process.exit(1)
    })
}

module.exports = dbConnect;