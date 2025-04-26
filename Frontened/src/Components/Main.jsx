import React from 'react'
import {useNavigate} from "react-router-dom"

function Main() {
  const navigate=useNavigate();
  return (
    <>
    <div id="Home" className='main  max-w-screen-2xl mx-auto px-4 md:px-20 '>
      <div className='overlay'></div>
      <div className='flex flex-col md:flex-row'>

    <div className='left md:w-1/2 z-20 order-2'>

       <form onSubmit={()=>navigate("/trains")} className="bg-white shadow-md rounded-lg p-6 w-[90%] md:w-[75%] md:ml-10 mx-auto mt-10 md:mt-5 space-y-6">
       
        <h1 className="text-2xl  ">BOOK TICKETS ON RAILSWIFT</h1>
         <div>
            <label className='text-xl ' >Source</label><br/>
            <input className="input-style" type="text" placeholder="Enter your Source"/>
         </div>
         <div>
            <label className='text-xl '>Destination</label><br/>
            <input className="input-style" type="text" placeholder="Enter your destination"/>
         </div>
         <div>
            <label className='text-xl '>Date</label><br/>
            <input className="input-style" type="date" />

         </div>
          <div>
            <label className='text-xl '>Gender</label><br/>
            <select className="input-style">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>
         </div>
         <button  type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 w-[90%] md:w-[80%]">
         Search Trains </button>

       </form>

    </div>
    <div className='right md:w-1/2 md:hidden'>
      <img className='rounded-md h-[450px] w-auto order-1 object-cover' src="./Vandebharat.jpg"/>
    </div>

      </div>

    </div>
    </>
  )
}

export default Main
