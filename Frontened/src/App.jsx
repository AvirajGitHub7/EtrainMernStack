import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Holidays from './Components/Holidays'
import Footer from './Components/Footer'
import Hotels from './Components/Hotels'
import { Routes, Route } from "react-router-dom";
import Signup from './Components/Signup.jsx'; 
import Trains from './Components/Trainlist/Trains.jsx'
import AddTrain from './Components/Admin/AddTrain.jsx'

function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={
        <>
        <Navbar/>
        <Main/>
        <Holidays/>
        <Hotels/>
        <Footer/>
        </>
       }

     />

     <Route path="/trains" element={<Trains/>} />
        
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/admin' element={<AddTrain/>} />

    </Routes>
         
    
    </>
  );
}

export default App
