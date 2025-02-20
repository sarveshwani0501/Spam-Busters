import React from "react";
import {Link} from "react-router-dom";
export const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-[500px] bg-gray-700 rounded-lg m-auto p-6 shadow-lg">
        <h2 className="text-center text-3xl my-4 font-semibold">Sign Up</h2>
        <form className="flex flex-col p-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label htmlFor="password" className="block mt-4">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label htmlFor="confirmPassword" className="block mt-4">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 w-full text-center rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          Already have an account? 
          <Link
            to="/auth"
            className="ml-1 text-sm text-blue-400 hover:underline"
          >
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};
