import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Radius from "./components/Radius";
import Home from "./components/Home";
import Students from "./components/Students";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>            
      <BrowserRouter>
        <Navbar /> 
        <Radius />         
        
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />       
          <Route path="/contact" element={<Contact />} />   
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;