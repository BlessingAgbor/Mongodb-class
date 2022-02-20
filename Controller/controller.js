const { append } = require("express/lib/response")

const userInfo= require("../Model/model")

// Create a new data in the database
const postUser= async (req, res)=> {
    try{
        const userInput= await userInfo.create({
    // The .create is a method used to create or insert data into our database
            fullName: req.body.fullName,
            course: req.body.course,
            age: req.body.age
        })
    
        res.status(201).json({
            message: "data created successfully",
            data: userInput
        })
        
    }catch(error) {
        res. status(404).json({message: error.message})
    }
    
}
// Get all the user data in the database
const getUser =async(req, res) =>{
    try{
        const user= await userInfo.find()
        res.status(200).json({message: "This is all the users data", 
        data: user })
    }catch(err) {
        res.status(404).json({message:err.message});
    }

}

// Get one user in the database
const getId =async(req, res) => {
try{
     // to get a user by its ID
   
        const user = await userInfo.findById(req.params.id)
     

     if (!user) {
         res.status(404).json({message: `User with this ID  does not exist`})
     }else {
        res.status(200).json({message: `Student with this id has been found`,
        data: user  
    })
     }
}catch(err){
    res.status(404).json({message: err.message})
}
}

module.exports= {
    postUser, getUser, getId
}