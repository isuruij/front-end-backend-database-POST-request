const mongoose = require("mongoose")
// creating a schema to create a model
const Schema = mongoose.Schema;

//creating a schema model
const userSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    email :{
        type:String,
        required:true
    },
    age : {
        type:Number,
        required : true
    }
})

// creating a model using the schema
const User = mongoose.model("Usernew",userSchema)

// exporting the model to use it in another program files
module.exports = User