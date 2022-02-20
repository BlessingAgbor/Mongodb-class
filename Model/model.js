const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})
module.exports= mongoose.model("user", userSchema)
 