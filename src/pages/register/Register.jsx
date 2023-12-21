import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const Navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/user/register", data);

      if (response.status === 200) {
        toast.success("User created successfully!");
        setInterval(() => {
            Navigate("/login");
        }, 2000)
      }
    } catch (error) {
      toast.error("Error creating user");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="mx-auto flex flex-col gap-y-2 max-w-sm w-full">
        <h1 className="text-center mb-2">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-2 w-full">
            <input
              type="text"
              name="username"
              className={`px-4 py-1 rounded ring-1 ring-slate-500 ${
                errors.username ? 'border-red-500' : ''
              }`}
              placeholder='username'
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
            <input
              type="email"
              name="email"
              className={`px-4 py-1 rounded ring-1 ring-slate-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <input
              type="password"
              name="password"
              className={`px-4 py-1 rounded ring-1 ring-slate-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <button type="submit" className="px-4 rounded bg-slate-950 text-white py-2">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
