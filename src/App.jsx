import Contant from "./components/Layout/Contant"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pasges/Home/Home";
import About from "./Pasges/About/About";
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./Pasges/About/Error404";

function App() {
  return (
    <>
    <Contant>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </Contant>
    </>
   

   
 

  )
}

export default App
