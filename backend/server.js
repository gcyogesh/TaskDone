import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/Connection.js';
import cors from 'cors'
import router from './routes/ContactRoute.js';


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


app.use('/api', router)
Connection();



const port = process.env.PORT
app.listen(port, (req,res)=>{
    console.log(`Port is running on ${port}`)
})