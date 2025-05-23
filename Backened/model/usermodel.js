import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})
const User=mongoose.model("user",userSchema);
export default User