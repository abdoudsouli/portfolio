import Content from "./components/Layout/Content"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pasges/Home/Home";
import About from "./Pasges/About/About";
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./Pasges/Error404/Error404";
import Contact from "./Pasges/Contact/Contact";
import Projects from "./Pasges/Projects/Projects";
import Education from "./Pasges/Education/Education";

function App() {
  return (
    <>
    <Content>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </Content>
    </>
   

   
 

  )
}

export default App
