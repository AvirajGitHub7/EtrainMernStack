import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./route/userroute.js"
import addtrainroute from "./route/addtrainroute.js"
import cors from "cors"


const app=express();


 dotenv.config();
 app.use(express.json());
 app.use(cors());

 const URI=process.env.MONGODBURI;
 const PORT=process.env.PORT || 3001;

 mongoose.connect(URI)   //Return Promise
 .then(() => console.log("Connected to MongoDB"))
 .catch((error) => console.log("MongoDB connection error:", error));


app.use("/user",userRoute);
app.use("/admin",addtrainroute);

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
});