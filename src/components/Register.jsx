import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [Rollno, setRollno] = useState("");
  const [course, setCourse] = useState("");
  const [Department, setDepartment] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !Rollno || !course || !Department) {
      alert("Please fill in all fields");
      return;
    }

    const newStudent = {
      name,
      Rollno,
      course,
      Department,
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    };

    try {
      const response = await axios.post("http://localhost:5000/students", newStudent);
      onAddStudent(response.data);
      navigate("/students");
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student. Make sure JSON Server is running on port 5000.");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "420px", margin: "40px auto", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", color: "#4a148c" }}>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

        <label>Roll No:</label>
        <input type="text" value={Rollno} onChange={(e) => setRollno(e.target.value)} placeholder="Enter your roll no" style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

        <label>Course:</label>
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter your course" style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

        <label>Department:</label>
        <input type="text" value={Department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter your department" style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

        {/* <label>Image URL:</label>
        <input type="upload" value={image} onChange={(e) => setImage(e.target.value)}  style={{ width: "100%", padding: "10px", marginBottom: "15px" }} /> */}

        <label>Upload Image:</label>
        <input type="file" onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
          };
          if (file) {
            reader.readAsDataURL(file);
          }
        }} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

        <button type="submit" style={{ width: "100%", padding: "12px", background: "#4a148c", color: "white", border: "none", borderRadius: "5px" }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
