import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-sm font-medium text-gray-500 mb-2">WELCOME BACK</h2>
        <h1 className="text-2xl font-bold text-black mb-6">Log In to your Account</h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="johnsondoe@nomail.com"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}  // Toggle between 'text' and 'password'
              placeholder="**********"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-8 right-3 text-gray-500"
            >
              {showPassword ? '🙈' : '👁️'}  {/* Change icon based on visibility */}
            </button>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-indigo-600 text-sm">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            CONTINUE
          </button>

          <div className="mt-4 text-center text-gray-600">Or</div>

          <div className="flex flex-col space-y-2 mt-4">
            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              Log In with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6 mr-2"
              />
              Log In with Facebook
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <img
                src="https://img.icons8.com/color/48/000000/mac-os.png"
                alt="Apple"
                className="w-6 h-6 mr-2"
              />
              Log In with Apple
            </button>
          </div>

          <p className="mt-6 text-center text-gray-600">
            New User?{" "}
            <Link to="/signup" className="text-indigo-600 font-bold">
              SIGN UP HERE
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
