import React from  "react";
import Student from "./Student";
import Radius from "./Radius.jsx";  
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar.jsx";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-container">
      <h1>Welcome to Student Management System</h1>
      <p>
        Manage student registrations, offered subjects and CGPA calculations all in one place.
      </p>

      <div className="button-group">
        <button className="register-btn" onClick={() => navigate("/Register")}>
          Get Registered
        </button>
        <br />
        <button className="subjects-btn" onClick={() => navigate("/Subjects")}>
          Offered Subjects
        </button>
        <br />
        <button className="cgpa-btn" onClick={() => navigate("/Cgpa")}>
          CGPA Calculator
        </button>
      </div>
    </div>
    <Radius />
    </div>

  );
};

export default Home;