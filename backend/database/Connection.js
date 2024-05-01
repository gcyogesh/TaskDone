import mongoose from "mongoose";


const Connection =()=>{
    mongoose.connect(process.env.MANGODB_URI).then(()=>{
        console.log("Database connnected sucessfully!")
    }).catch((error)=>{
        console.log(error, "Error vayo hai sathi herny paryo")

    })
}

export default Connection;