import User from "../model/usermodel.js";
import bcrypt from "bcrypt"
export const signup=async (req,res)=>{
  try {
    const {fullname,email,password}=req.body;
    const existingUser= await User.findOne({email});
    if(existingUser){

      return res.status(400).json({message:"user already exit"});
    }
    
   
   const hashPassword= await bcrypt.hash(password,10);
   const createUser=new User({
    fullname,
    email,
    password:hashPassword
   })
   await createUser.save();
   return res.status(200).json({message:"User Created successfully",
    userInfo: {
      _id: createUser.id,
      fullname: createUser.fullname,
      email: createUser.email,
    },
   });

  } catch (error) {
    res.status(500).json({message:"Internal Server Error"})
    console.log("Server Error:",error)
  }
}

export const login=async(req,res)=>{
  try {
    const {email,password}=req.body;
    const existingUser=await User.findOne({email});
    const matchPassword=await bcrypt.compare(password,existingUser.password);
    if(!existingUser || ! matchPassword){
      return res.status(400).json({message:"Invalid email or password"});
    }else{
      res.status(200).json({
          message:"login successfull",
          user:{
          _id:existingUser.id,
          email:existingUser.email,
          fullname:existingUser.fullname
      }})
    }
    
  } catch (error) {
    console.log("Error",error);
    res.status(500).json({message:"Server error"});
  }
}
