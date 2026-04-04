import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero Section/Hero";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
    </Routes>
    </>
  );
}

export default App;