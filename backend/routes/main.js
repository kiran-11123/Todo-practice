import express from 'express'
import Todo_model from '../models/Todo';
const Todo_Router = express.Router();



Todo_Router.post("/get_data" , async(req,res)=>{
       
    try{

        const response = await Todo_model.find({})

        if(response.length ===0){
            return res.status(200).json({
                message:"No Todos Present..",
                data:[]
            })
        } 

        return res.status(200).json({
            message:"Todos Fetched Successfully..",
            data:response
        })

    }catch(er){
        return res.status(500).json({
            message:"Internal server Error",
            error:er
        })
    }
})
















export default Todo_Router