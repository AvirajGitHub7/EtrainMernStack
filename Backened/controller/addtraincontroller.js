import Train from "../model/addtrainlistmodel.js";

export const addTrain = async (req, res) => {
  try {
    const { name, from, to, departure, arrival, price ,duration,date,days} = req.body;
    const newTrain = new Train({
      trainName:name,
      source:from,
      destination:to,
      departureTime:departure,
      arrivalTime:arrival,
      price,
      duration,
      date,
      days
    });
    await newTrain.save();
    res.status(200).json({ message: "Train added successfully", train: newTrain });
  } catch (error) {
    res.status(500).json({ message: "Error adding train" });
  }
};
