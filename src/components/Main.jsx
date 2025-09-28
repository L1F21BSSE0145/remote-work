import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className="main">
      <h1>Welcome to Student Management System</h1>
      <p>This is a simple student management system built with React.</p>
      <p>to learn more about</p>
      <div className="main1">
      <input type="text" placeholder="Enter student name" /><img src="src/components/download.jpg" width={30} height={40} />
      </div>
    </div>
  )
}

export default Main
