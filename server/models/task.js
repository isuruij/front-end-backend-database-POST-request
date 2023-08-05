const mongoose = require("mongoose");
// creating a schema to create a model
const Schema = mongoose.Schema;

//creating a schema model
const userSchema = new Schema({
  discription: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    unique: false,
  },
});

// creating a model using the schema
const Task = mongoose.model("Task", userSchema);

// exporting the model to use it in another program files
module.exports = Task;
