import ContactModel from "../models/ContactModel.js";

export const ContactController = async(req,res)=>{

    try{
        const {name, email, phone, getInTouch, message } = req.body;
        if(!name || !email || !phone || !getInTouch || !message){
            return res.status(401).json({msg:"Plese provide all the input"});
        }

        const hero = await ContactModel.create({
            name, email, phone, getInTouch, message
        })
        return res.status(201).json({msg:"Contact Message is send to databse sucessfully!"});

    }catch(error){
         console.log(error, "Error");
         return res.status(500).json({msg:"Internal server error", sucess:false})

    }

}   