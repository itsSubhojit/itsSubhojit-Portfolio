import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;