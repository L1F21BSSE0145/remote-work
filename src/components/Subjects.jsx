import React from "react";
import PropTypes from "prop-types"
import "./Subjects.css";
import Radius from "./Radius.jsx";

const Subjects = () => {
  const subjects = [
    { id: 1, name: "Web Development", code: "CS101", credit: 3 , teacher: "Mr. Ahsan Raza" },
    { id: 2, name: "Artificial Intelligence", code: "CS202", credit: 4 , teacher: "Ms. Sara Ahmed"},
    { id: 3, name: "Database Systems", code: "CS303", credit: 3 , teacher: "Mr. Ali Khan"},
    { id: 4, name: "Operating Systems", code: "CS404", credit: 3 , teacher: "Dr. Abdul Rehman"},
    { id: 5, name: "Software Engineering", code: "CS505", credit: 3 , teacher: "Ms. Mawish Zafar"},
    { id: 6, name: "Computer Networks", code: "CS606", credit: 3 , teacher: "Mr. Usman Tariq"},
    { id: 7, name: "Data Structures", code: "CS707", credit: 3 , teacher: "Dr. Nadia Hussain"},
    { id: 8, name: "Machine Learning", code: "CS808", credit: 4 , teacher: "Ms. Ayesha Malik"},
    { id: 9, name: "Cyber Security", code: "CS909", credit: 3 , teacher: "Mr. Bilal Aslam"},
    { id: 10, name: "Cloud Computing", code: "CS010", credit: 3 , teacher: "Dr. Sana Qureshi"},
    { id: 11, name: "Mobile App Development", code: "CS111", credit: 3 , teacher: "Mr. Fahad Iqbal"},
      ];

  return (
    <div className="subjects-container">
      <h2>📚 Available Subjects</h2>
      <div className="subject-list">
        {subjects.map((sub) => (
          <div key={sub.id} className="subject-card">
            <h3>{sub.name}</h3>
            <p><b>Code:</b> {sub.code}</p>
            <p><b>Credit Hours:</b> {sub.credit}</p>
            <p><b>Teacher Name:</b> {sub.teacher}</p>
          </div>
        ))}
      </div>
      <Radius />
    </div>
  );
};
Subjects.propTypes={
    name:PropTypes.string.isRequired,
    code:PropTypes.string.isRequired,
    credit:PropTypes.number.isRequired,
}
export default Subjects;
