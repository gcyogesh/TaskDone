import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,    
    },
    phone:{
        type:String
    },
    getInTouch:{
        type:String,
    },
    message:{
        type:String,
    }

})

const ContactModel = mongoose.model('contacttask', ContactSchema)

export default ContactModel;