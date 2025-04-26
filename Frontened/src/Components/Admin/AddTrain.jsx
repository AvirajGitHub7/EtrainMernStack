import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const AddTrain = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    to: "",
    departure: "",
    arrival: "",
    price: "",
    duration: "",
    date: "",
    days: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/admin/addtrain", {
        ...formData,
        role: "admin" // jab tak authentication nahi laga tab tak
      });
      toast.success("Train Added Successfully");
      setFormData({
        name: "",
        from: "",
        to: "",
        departure: "",
        arrival: "",
        price: "",
        duration: "",
        date: "",
        days: ""
      });
    } catch (err) {
      alert("Error adding train");
      console.log(err);
    }
  };

  return (
    <>

    <Toaster/>
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add Train</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Train Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="from" placeholder="From" value={formData.from} onChange={handleChange} required />
        <input type="text" name="to" placeholder="To" value={formData.to} onChange={handleChange} required />
        <input type="text" name="departure" placeholder="Departure Time" value={formData.departure} onChange={handleChange} required />
        <input type="text" name="arrival" placeholder="Arrival Time" value={formData.arrival} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="text" name="days" placeholder="Running Days" value={formData.days} onChange={handleChange} required />
        <button type="submit">Add Train</button>
      </form>
    </div>
    
    </>
  );
};

export default AddTrain;
