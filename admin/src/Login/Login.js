import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate for React Router v6

function Login() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for React Router v6

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://amongusdashboard.craftifyproductions.com/api/login", {
        email,
        password,
      }); 
      const authToken = response.data.token;

      // Store the token in sessionStorage (or localStorage if needed)
      sessionStorage.setItem("authToken", authToken);
      sessionStorage.setItem("AdminName", response.data.admin_name);

      // Redirect to Posts page
      navigate("/Admin/Posts"); // Using react-router's navigate to perform the redirect
      console.log("Login successful:", response.data.message);
      setError(null);

    } catch (error) {
      // Handle login errors
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md" style={{ marginTop: "-50px" }}>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 p-2 border rounded w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="text-center">
            <button className="w-full bg-red-500 text-white p-2 rounded hover-bg-red-600" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
