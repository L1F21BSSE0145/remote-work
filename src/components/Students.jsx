import React from 'react'
import PropTypes from "prop-types"
import "./Students.css"


const Students = () => {
  const Student = [
    { id: 1, name: "Ahsan Raza", age: 21, class: "BSSE", grade: "A", course: "web developement" },
    { id: 2, name: "Ali Khan", age: 22, class: "BSCS", grade: "B+", course: "artificial intelligence"},
    // { id: 3, name: "Sara Ahmed", age: 20, class: "BSIT", grade: "A+" },
    // { id: 4, name: "Hamza Malik", age: 23, class: "BSSE", grade: "B" },
    // { id: 5, name: "Zainab Tariq", age: 21, class: "BSCS", grade: "A" },

  ];
  const handleview=(name)=>{
    alert(`Viewing details of ${name}`);
  }
  const handleDelete=(name)=>{
    alert(`Deleting ${name}`);
  }
  return (
    <div className="student-container">
      <h5>Students page</h5>
      <div className="student-list">
        {Student.map((i,index) => (
          <div className="student-card" key={index}>
            <h3>{i.id}</h3>
            <h3>{i.name}</h3>
            <p>Age: {i.age}</p>
            <p>Class: {i.class}</p>
            <p>Grade: {i.grade}</p>
            <p>Course: {i.course}</p>
            <button onClick={()=>handleview(i.name)}>View</button>
            <button onClick={()=>handleDelete(i.name)}>Delete</button>
              </div>
        ))}


      </div>
      </div>

  )
}

Students.propTypes={
  id:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  age:PropTypes.string.isRequired,
  class:PropTypes.string.isRequired,
  grade:PropTypes.string.isRequired,
  course:PropTypes.string.isRequired,
}
export default Students
