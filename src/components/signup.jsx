import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }
    if(formData.password.length < 6){
      alert("Password must be at least 6 characters long");
    }
    if(formData.email.indexOf("@") === -1){
      alert("Please enter a valid email address");
    }
    alert("Signup successful ✅");
    navigate("/login"); // ✅ Go to Login page after signup
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Signup;

