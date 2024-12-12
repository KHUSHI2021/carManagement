const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type : String,
        unique : true,
        required : true
       
    },
    password: String
},{
    timestamps : true
})

const userModel =  mongoose.model("user",userSchema)

module.exports = userModel