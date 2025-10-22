import React, { useState } from "react";
import Radius from "./Radius";


function CGPA() {
  const [subjects, setSubjects] = useState([{ name: "", marks: "" }]);
  const [cgpa, setCgpa] = useState(null);

  // Handle input change
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newSubjects = [...subjects];
    newSubjects[index][name] = value;
    setSubjects(newSubjects);
  };

  // Add a new subject row
  const handleAddSubject = () => {
    setSubjects([...subjects, { name: "", marks: "" }]);
  };

  // Calculate CGPA
  const handleCalculate = () => {
    let totalGpa = 0;
    let count = 0;

    subjects.forEach((sub) => {
      const marks = parseFloat(sub.marks);
      if (!isNaN(marks)) {
        let gpa = 0;
        if (marks >= 86) gpa = 4.0;
        else if (marks >= 85) gpa = 3.7;
        else if (marks >= 75) gpa = 3.3;
        else if (marks >= 70) gpa = 3.0;
        else if (marks >= 65) gpa = 2.7;
        else if (marks >= 60) gpa = 2.3;
        else if (marks >= 55) gpa = 2.0;
        else if (marks >= 50) gpa = 1.7;
        else gpa = 2.0;

        totalGpa += gpa;
        count++;
      }
    });

    const calculatedCgpa = count > 0 ? (totalGpa / count).toFixed(2) : 0;
    setCgpa(calculatedCgpa);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎓 Student CGPA Calculator</h2>
      <table
        border="1"
        style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          width: "70%",
          textAlign: "center",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((sub, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Subject Name"
                  value={sub.name}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="marks"
                  placeholder="Marks (0–100)"
                  value={sub.marks}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddSubject} style={{ margin: "10px" }}>
        ➕ Add Subject
      </button>
      <button onClick={handleCalculate} style={{ margin: "10px" }}>
        📊 Calculate CGPA
      </button>

      {cgpa !== null && (
        <h3 style={{ marginTop: "20px" }}>
          Your CGPA is: <span style={{ color: "green" }}>{cgpa}</span>
        </h3>
      )}
      <Radius />
    </div>
  );
}

export default CGPA;
