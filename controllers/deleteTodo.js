const Todo = require("../models/Todos.js")
exports.deleteTodo = async(req,res) => {
    try {

    }
    catch(err) {
        console.log(err)
        console.error(err)
        res.status(500).json({
            success: false,
            data: "Internal Server Issue",
            message: err.message
        })
    }
}