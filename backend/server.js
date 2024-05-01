import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/Connection.js';
const app = express();
dotenv.config();

Connection();



const port = process.env.PORT
app.listen(port, (req,res)=>{
    console.log(`Port is running on ${port}`)
})