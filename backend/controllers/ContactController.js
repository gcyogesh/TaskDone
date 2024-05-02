import ContactModel from "../models/ContactModel.js";

export const ContactController = async(req,res)=>{

    try{
        const {name, email, phone, getInTouch, message } = req.body;
        console.log(req.body)
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



export const GetThatInformation = async(req,res)=>{
    try {
        // Fetch all contact messages from the database
        const contactMessages = await ContactModel.find();
        return res.status(200).json(contactMessages);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error", success: false });
    }

}



export const DeleteThatInfo = async(req, res) => {
    try {
        const messageId = req.params.id;
        const deleteInformation = await ContactModel.findByIdAndDelete(messageId);
        if (!deleteInformation) {
            return res.status(404).json({ msg: "Can't find that information" });
        }
        return res.status(201).json({ msg: "That info deleted successfully", success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal server error", success: false });
    }
};





export const EditThatInfo = async (req,res)=>{
    try{
        const {id} = req.params;
        const {name, email, phone,getInTouch, message} = req.body;
        const updateThatInfo = await ContactModel.findByIdAndUpdate(id,{
            name, email, phone, getInTouch, message
        }, {new:true})

        if(!updateThatInfo){
            return res.send(404).json({msg:"That information not found ", sucess:false})
        }
        return res.status(200).json({msg:"That information updated sucessfully!"})

    }catch(error){
        console.error(error);
        return res.status(500).json({ msg: "Internal server error", success: false });
    }
}





