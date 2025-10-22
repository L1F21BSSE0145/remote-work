import React, { useState, useEffect } from "react";
import axios from "axios";
import Radius from "./Radius";

const Students = ({ students = [], setStudents }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    name: "",
    Rollno: "",
    course: "",
    Department: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, [setStudents]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/students/${id}`)
      .then(() => {
        setStudents(students.filter((student) => student.id !== id));
      })
      .catch((err) => console.error("Error deleting student:", err));
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditedStudent({
      name: student.name,
      Rollno: student.Rollno,
      course: student.course,
      Department: student.Department,
      image: student.image,
    });
  };

  const handleSave = async (id) => {
    try {
      const updatedStudent = { ...editedStudent };
      await axios.put(`http://localhost:5000/students/${id}`, updatedStudent);
      setStudents(students.map((s) => (s.id === id ? { ...s, ...updatedStudent } : s)));
      setEditingId(null);
      alert("Student updated successfully!");
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student.");
    }
  };

  const handleCancel = () => setEditingId(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#4a148c" }}>Students List</h2>
      {!students || students.length === 0 ? (
        <p style={{ textAlign: "center" }}>No students registered yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {students.map((student) => (
            <li key={student.id} style={{ background: "#f9f9f9", margin: "10px 0", padding: "15px", borderRadius: "8px" }}>
              {editingId === student.id ? (
                <>
                  <input name="name" value={editedStudent.name} onChange={handleChange} />
                  <input name="Rollno" value={editedStudent.Rollno} onChange={handleChange} />
                  <input name="course" value={editedStudent.course} onChange={handleChange} />
                  <input name="Department" value={editedStudent.Department} onChange={handleChange} />
                  <input name="image" value={editedStudent.image} onChange={handleChange} />
                  <br />
                  <button style={{padding:"5px", margin:"5px"}} onClick={() => handleSave(student.id)}>Save</button>
                  <button style={{padding:"5px", margin:"5px"}} onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <h3>{student.name}</h3>
                  <p>Roll No: {student.Rollno}</p>
                  <p>Course: {student.course}</p>
                  <p>Department: {student.Department}</p>
                  <img src={student.image} alt={student.name} style={{ width: "100px", borderRadius: "5px" }} />
                  <br />
                  <button   style={{padding:"5px", margin:"5px"}}   onClick={() => handleEdit(student)}>Edit</button>
                  <button   style={{padding:"5px", margin:"5px"}}   onClick={() => handleDelete(student.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <Radius />
    </div>
  );
};

export default Students;

