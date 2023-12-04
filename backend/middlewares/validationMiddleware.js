const {z} = require("zod");
const { parseAsync } = require("../validation/auth_validator");



const validate =(schema)=> async (req, res, next)=>{


    try {
        
        const parseBody = await  schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {

     next(error.error);
        
    }
}

module.exports = validate;