// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Radius from "./components/Radius";
// import Home from "./components/Home";
// import Signup from "./components/signup";
// import Login from "./components/login";
// import Students from "./components/Students";
// import Register from "./components/Register";
// import Subjects from "./components/Subjects";
// import CGPA from "./components/CGPA";

// function App() {
//   const [students, setStudents] = useState([
    //  {
    //    id: 1,
    //    name: "Ahsan Raza",
    //    age: 21,
    //    className: "BSSE",
    //    grade: "A",
    //    course: "Web Development",
    //    image: "https://randomuser.me/api/portraits/men/20.jpg",
    //  },
    //  {
    //    id: 1,
    //    name: "Ahsan bhai",
    //    age: 21,
    //    className: "BSSe",
    //    grade: "B",
    //    course: "Computer Science",
    //    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nlspxi7FmlW73T8J9gMXBhD5huEjmDsQDQ&s",
    //  },
//   ]);

//   const handleAddStudent = (newStudent) => {
//     setStudents((prev) => [...prev, newStudent]);
//   };

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Radius />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/register" element={<Register onAddStudent={handleAddStudent} />} /> 
//         <Route path="/students" element={<Students students={students} setStudents={setStudents} />} />
//         <Route path="/subjects" element={<Subjects />} />
//         <Route path="/cgpa" element={<CGPA />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Radius from "./components/Radius.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import Students from "./components/Students.jsx";
import Register from "./components/Register.jsx";
import Subjects from "./components/Subjects.jsx";
import CGPA from "./components/CGPA.jsx";

function Layout({children}){
  const location=useLocation();
  const hideNavbarRoutes=["/","/login"];

  return (
    <>
    {!hideNavbarRoutes.includes(location.pathname)&&<Navbar/>}
    {children}
    </>
  )
}

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
    
  };

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/radius" element={<Radius />} />
        <Route
          path="/register"
          element={<Register onAddStudent={handleAddStudent} />}
        />
        <Route
          path="/students"
          element={<Students students={students} setStudents={setStudents} />}
        />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/cgpa" element={<CGPA />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;


