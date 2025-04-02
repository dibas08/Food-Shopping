import userModel from "../models/userModel";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login user

const loginuser = async(req,res)=>
{

}

const createToken = (id)=>
{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async(req,res) =>{

    const {name,password,email} = req.body;
    try{
        // checkimg is user already exist
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"User Already Exists"})
        }
        // validating email format 
        if(!validator.isEmail(email))
        {
            return res.json({success:false,message:"Enter a Valid Email"})
        }

        if(password.length<8)
        {
            return res.json({success:false,message:"Please enter Strong Password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10) 
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    }
    catch{
        console.log(error);
        res.json({success:false,message:"Not created"})
    }
}

export {loginuser,registerUser}
