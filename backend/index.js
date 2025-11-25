import express from 'express'
import cors from 'cors'
import connectDB from './models/db.js';
import Todo_Router from './routes/main.js';

connectDB();
const app = express();
app.use(express.json());
app.use("/api/v1" , Todo_Router)











app.listen(3000,()=>{
    console.log("Server is running ")
})