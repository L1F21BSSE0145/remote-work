import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email === "" || credentials.password === "") {
      alert("Please fill in all fields");
    } else {
      alert(`Welcome back! ${credentials.email}`);
      navigate("/home");  
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;

