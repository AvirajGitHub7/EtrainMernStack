import React from 'react'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };
    await axios.post("http://localhost:3000/user/register", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfully");
          localStorage.setItem("users", JSON.stringify(res.data.user));
          navigate("/"); // redirect to home
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Error: ' + err.response.data.message);
      });
  }

  return (
    <>
      <Toaster />
      <div className='flex justify-center items-center w-full h-screen'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-lg rounded-lg p-6 relative'>
          <h1 className='text-2xl text-pink-600 mb-4'>Signup</h1>
          <button
            onClick={() => navigate('/')}
            className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
            type="button"
          >
            &times;
          </button>

          <div className='space-y-2'>
           
            <input
              className='border-[2px] p-2 rounded-md w-full'
              type="text"
              placeholder="Enter your fullname"
              {...register("fullname", { required: true })}
            />
            <br/>
            {errors.fullname && <span className="text-red-500">Fullname is required</span>}
            <br/>
            
            <input
              className='border-[2px] p-2 rounded-md w-full'
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-red-500">Email is required</span>}
            <br />
           
            <input
              className='border-[2px] p-2 rounded-md w-full'
              type="password"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>

          <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-8 space-x-6'>
            <button className="bg-pink-600 text-white px-5 py-2 rounded-md hover:bg-pink-700 transition duration-200">Signup</button>
            <p className='mt-2 md:mt-0'>Already have an account? <RouterLink to="/" className='text-blue-500 underline cursor-pointer'>Login</RouterLink></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup
