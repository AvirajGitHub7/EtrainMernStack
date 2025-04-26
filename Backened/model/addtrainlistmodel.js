import mongoose from "mongoose";
const trainSchema=mongoose.Schema({
    trainName: {
        type: String,
        required: true
      },
      source: {
        type: String,
        required: true
      },
      destination: {
        type: String,
        required: true
      },
      departureTime: {
        type: String,
        required: true
      },
      arrivalTime: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      duration:{
        type: Number,
        required: true
      },
      date:{
        type:String,
        required:true
      },
      days: {
        type: [String], // Array of strings
        // required: true
      }
});
const trainmodel=mongoose.model("trainlist",trainSchema);
export default trainmodel