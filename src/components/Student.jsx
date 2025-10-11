import React from 'react'
import PropTypes from "prop-types"
import "./Student.css"

const Student = ({name, roll, course, departement, image}) => {
  return (
    <div className="container">
      <h1>Student</h1>
      <hr />
      <h2>Identity Cards</h2>

      <div className="id-content">
        <div className="id-info">
          <p><b>Name:</b> {name}</p> 
          <p><b>RollNo:</b> {roll}</p>
          <p><b>Course_Name:</b> {course}</p>
          <p><b>Department_Name:</b> {departement}</p>
        </div>
        <div className="id-photo">
          <img src={image} />
          <br />
           <figcaption>{name}</figcaption> 
          {/* <br /> */}
          {/* <center>Hamza ali</center> */}
        </div>
      </div>
    </div>
  );
}

Student.propTypes={
  name:PropTypes.string.isRequired,
  roll:PropTypes.string.isRequired,
  course:PropTypes.string.isRequired,
  departement:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
}

export default Student;
