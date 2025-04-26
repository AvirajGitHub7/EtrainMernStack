import React from 'react'
import hotels from "../../hotels.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Hotels() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 768, // Mobile screen
              settings: {
                  slidesToShow: 1, // Mobile pe ek hi dikhega
                  slidesToScroll: 1,
              }
          }
      ]
      };
  return (
    <div id="Hotels" className='max-w-screen-2xl mx-auto px-4 md:px-20 m-10'>
       <h1 className='text-3xl mb-10'>Hotels</h1>
       <div className="w-full mb-10">

        <Slider {...settings}>

        {hotels.map((item)=>(
        <div key={item.id} className="flex justify-center">
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
           <figure>
             <img
             className="w-full h-48 object-cover" 
              src={item.img}
              alt="Shoes" />
           </figure>
        <div className="card-body">
        <h2 className="card-title">{item.location}</h2>
        <p>{item.text}</p>
       <div className="card-actions justify-end">
       <button className="btn btn-primary">Buy Now</button>
        </div>
        </div>

                </div>
      </div>
        ))}
        </Slider>
        
       </div>
    </div>
  )
}

export default Hotels
