import mongoose from "mongoose";

const Todo_Schema  = new mongoose.Schema({
     title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const Todo_model = mongoose.model("Todo_app" , Todo_Schema);


export default Todo_model;