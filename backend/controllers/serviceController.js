const Service = require("../models/serviceModel");



const getServices = async (req, res)=>
{
try {

    const service = await Service.find();
    if(service){
    return res.status(400).json(service);
    }
    else{
    return res.status(400).json({ msg: "Cannot fetch the services !!" });

    }
    
} catch (error) {
    return res.status(400).json({msg:"internal server error !!"})
    
}

}


module.exports = {getServices}