// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello Ji, Kaise ho Saare");
// });

// app.post("/api/cars", (req, res) => {
//   const { name, brand } = req.body;
//   console.log(name);
//   console.log(brand);
//   res.send("Car submitted Successfully !!!");
// });

// mongoose
//   .connect("mongodb://localhost:27017/myDatabase")
//   .then(() => {
//     console.log("Connection Successful");
//   })
//   .catch((error) => console.log("Database connection Failed"));

// app.listen(3000, () => {
//   console.log(`Server running on PORT 3000`);
// });
const express = require('express')
const app = express()
const todoRoutes = require("./routes/todos")
require("dotenv").config();

const PORT = process.env.PORT || 4000

//middleware to parse json 
app.use(express.json())
//imports routes for todo apis

//mount the todo API Routes
app.use("/api/v1",todoRoutes)
//CONNECT to the database
const dbConnect = require("./config/database.js")
dbConnect();
app.get("/",() => {
    res.send('<h1>This is Homepage baby</h1>')
})
app.listen(3000,() => {
    console.log(`Server started successfully at ${PORT}`)
})


