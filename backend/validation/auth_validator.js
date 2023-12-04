const {z} = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required " })
    .trim()
    .min(3, { message: "username must be of at least 3 characters !" })
    .max(30, { message: "username must be of at max of  30 characters !" }),
  email: z
    .string({ required_error: "Username is required " })
    .email({message:"Email format is wrong"}),
  phone: z
    .string({ required_error: "phone is required " })
    .trim()
    .min(10, { message: "phone must be of at least 10 characters !" })
    .max(30, { message: "phone must be of at max of  30 characters !" }),
  password: z
    .string({ required_error: "password is required " })
    .trim()
    .min(6, { message: "password must be of at least 3 characters !" })
    .max(30, { message: "password must be of at max of  30 characters !" }),


});

const loginSchema = z.object({
  
  
  email: z
    .string({ required_error: "Email is required " })
    .email({message:"Email format is wrong"}),
  
  password: z
    .string({ required_error: "password is required " })
    .trim()
    .min(6, { message: "password must be of at least 3 characters !" })
    .max(30, { message: "password must be of at max of  30 characters !" }),


});

module.exports ={ signupSchema , loginSchema};