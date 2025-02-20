import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-[500px] bg-gray-700 rounded-lg m-auto p-6 shadow-lg">
        <h2 className="text-center text-3xl my-4 font-semibold">Login</h2>
        <form className="flex flex-col p-4">
          <label htmlFor="email" className="block mb-1 ">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <label htmlFor="Password" className="block mt-4">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 w-full text-center rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <Link
            to="/forget-password"
            className="text-sm text-blue-400 hover:underline"
          >
            Forget Password?
          </Link>
          <span className="mx-2"> | </span>
          <Link
            to="/register"
            className="text-sm text-blue-400 hover:underline"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};
