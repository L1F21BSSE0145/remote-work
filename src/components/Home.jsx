import React from  "react";
import Student from "./Student";
import Main from "./Main";  
import "./Home.css";

const Home = () => {
  const students = [
    {
      name: "Hamza Ali",
      roll: "L1F21BSSE0145",
      course: "Introduction to Computing",
      departement: "Computer Science",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdAejDIGro-lOKwqMr4diJ6dy3utEZKxjDg&s",
    },
    {
      name: "Ali Khan",
      roll: "L1F21BSSE0146",
      course: "Data Structures",
      departement: "Computer Science",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className="home-page">
      <Main />   
      <main className="gridName">
        {students.map((i, index) => (
          <Student
            key={index}
            name={i.name}
            roll={i.roll}
            course={i.course}
            departement={i.departement}
            image={i.image}
            figcaption={i.name}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;