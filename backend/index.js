import express from 'express'
import cors from 'cors'
import connectDB from './models/db.js';

connectDB();
const app = express();
app.use(express.json());












app.listen(3000,()=>{
    console.log("Server is running ")
})