import React from 'react'
import list from "../../list.json"
function Holidays() {
  return (
    <>
      <div id="Holidays" className='max-w-screen-2xl mx-auto px-4 md:px-20 mt-10 mb-10'>
        <h1 className='text-3xl ml-10'>Holidays</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
          {list.map((item)=>(
            <div className='shadow-md p-4 rounded-md space-y-2  hover:scale-90 duration-300' key={item.id}>
              <img className="w-full h-40 object-cover rounded-md"src={item.img}/>
              <h2 className='text-xl font-semibold mt-4'>{item.heading}</h2>
              <p className='text-gray-600 text-sm mt-2'>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Holidays
