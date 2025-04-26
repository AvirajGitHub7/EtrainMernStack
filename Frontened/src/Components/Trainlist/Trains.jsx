import React from 'react';
import trainslist from "../../../trainslist.json"
import Footer from "../Footer.jsx"
import {useNavigate} from "react-router-dom"

function Trains() {
   const navigate=useNavigate();
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-white max-w-screen-2xl mx-auto px-4 md:px-20 shadow-md flex flex-col justify-between space-y-4 pb-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between w-full pt-4">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-md w-52">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="text-2xl font-bold text-gray-800">Rail<span className="text-blue-600">Swift</span></a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li><a>Trains</a></li>
              <li><a>Offers</a></li>
              <li><a>Help</a></li>
            </ul>
          </div>
          {/* Navbar End */}
          <div className="  navbar-end">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">Login</button>
          </div>
        </div>


        {/* Booking Section */}
        <div className="w-max-screen flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-5 px-2">

          {/* From - To Inputs */}
          <div className="flex space-x-2">
            <input className="border border-gray-300 p-3 rounded-md w-52" type="text" placeholder="From" defaultValue="Guwahati" />
            <input className="border border-gray-300 p-3 rounded-md w-52" type="text" placeholder="To" defaultValue="Silchar" />
          </div>

          {/* Date Pickers */}
          <div className="flex space-x-2">
            <input className="border border-gray-300 p-3 rounded-md w-52" type="date" defaultValue="2025-09-23" />
            <input className="border border-gray-300 p-3 rounded-md w-52" type="date" defaultValue="2025-09-30" />
          </div>

          {/* Dropdowns */}
          <div className="flex space-x-4">
            <select className="border border-gray-300 p-3 rounded-md w-52">
              <option disabled selected>Prices</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>

            <select className="border border-gray-300 p-3 rounded-md w-52">
              <option disabled selected>Carriers</option>
              <option>IRCTC</option>
              <option>Private</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>

      </div>
   

      <main className='max-w-screen-2xl px-4 md:px-40 mt-10 space-y-5'>
  {trainslist.map((train) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6" key={train.id}>
      <div>
        <div className="1st part flex justify-between text-xl">
          <h1>{train.name} ({train.number})</h1>
          <p>RUNS On: {train.days.join(" ")}</p>
        </div><hr />

        <div className="2nd part flex justify-between mt-5">
          <p>{train.departure} | {train.from} | SAT,29 MAR</p>
          <p>{train.duration}</p>
          <p>{train.arrival} | {train.to} | Sun, 30 Mar</p>
        </div>

        <div className="3rdpart space-y-4">
          <div className="flex space-x-12">
            <h2>Sleeper</h2>
            <h2>AC 3 tier</h2>
            <h2>AC 2 tier</h2>
          </div>

          <div className="dates mt-3 flex space-x-3 items-center justify-between">
            {["Sat, 29 Mar", "Mon, 31 Mar", "Tue, 01 Apr", "Wed, 02 Apr", "Thu, 03 Apr", "Fri, 04 Apr"].map((date, index) => (
              <div className='bg-gray-100 p-3 rounded-md' key={index}>
                <p>{date}<br />RAC {index + 33}</p>
              </div>
            ))}
          </div>

          <p>Please check NTES website or NTES app for actual time before boarding</p>
        </div>

        <div className="4th part space-x-2">
          <button onClick={()=>document.getElementById('my_modal_2').showModal()} 
          className='bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Book Now</button>
          <span>240/-</span>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
  <div className="modal-box ">
    <h3 className="font-bold text-lg"></h3>
    <p className="py-4">Are You Confirm that You want to book your Train ticket on  {train.date}. Select Yes to Proceed to Payment</p>
    <div className="btns flex space-x-5 items-center justify-center">

    <button  onClick={()=>navigate("/payment")} className='bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-white' >Yes</button>
    <button onClick={()=>document.getElementById('my_modal_2').close()} className='bg-red-500 hover:bg-red-700 px-3 py-1 rounded-md text-white' >No</button>

    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

    </div>
  ))}

 


</main>

 <Footer/>
    </>
  );
}

export default Trains;

