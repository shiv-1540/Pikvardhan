import React, { useContext, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls
import toast from "react-hot-toast"; // Toast for notifications
import { AuthContext, useAuth } from "../../context/AuthContext";
import bgland from '../../assets/imgs/bgland.png';

const LoginForm = () => {
  const location = useLocation();
  const { login } = useContext(AuthContext); // Access the login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      // API call to authenticate user
      const response = await axios.post("http://localhost:5000/userAuthen/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        toast.success("Login successful!");
        const userId = response.data.user.id;
        const username = response.data.user.username;
        const profileImage = response.data.user.profileImage;

        login(token, userId, profileImage); // Call the login function with the received data
        navigate(`/home/${username}`); // Redirect to the home page after login
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Login failed!");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Error during login:", error);
    }
    //navigate(`/home`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300" style={{ backgroundImage: `url(${bgland})`}}>
      <div className=" bg-gray-300 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Pikvardhan</h1>
        <h2 className="text-xl font-semibold text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            id="logintbtn"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          New to Pikavardhan? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;