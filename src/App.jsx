import Contant from "./components/Layout/Contant"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pasges/Home/Home";
import About from "./Pasges/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Contant>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </Contant>
    </>
   

   
 

  )
}

export default App
