const Todo = require("../models/Todos.js")

//define route handler 

exports.createTodo = async(req,res) => {
    try {
        //extraxt title and descp from req body
        const {title,description} = req.body;
        //create a new todo Obj and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            }
        );
    }
    catch(err) {
        console.error(err)
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data: "internal Server Error",
            message: err.message
        })
    }
}