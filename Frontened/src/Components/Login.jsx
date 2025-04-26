import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password
    };
    await axios.post("http://localhost:3000/user/login", userinfo)
      .then((res) => {
        if (res.data) {
          toast.success('Logged in successfully');
          localStorage.setItem("users", JSON.stringify(res.data.user));
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            navigate("/"); // redirect to homepage after login
          }, 1500);
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Error: ' + err.response.data.message);
      })
  }

  return (
    <div>
      <Toaster />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input
                className="outline-none w-80 border p-2 rounded"
                placeholder='Enter your email'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span><br />
              <input
                className="outline-none w-80 border p-2 rounded"
                placeholder='Enter your password'
                type='password'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
            </div>

            <div className='btns mt-7 space-y-2 flex justify-around'>
              <button className='bg-blue-500 text-white rounded-md px-5 py-2 hover:bg-blue-400 cursor-pointer duration-300'>Login</button>
              <p>Not registered? <Link to="/Signup" className='text-blue-500 underline cursor-pointer'>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
