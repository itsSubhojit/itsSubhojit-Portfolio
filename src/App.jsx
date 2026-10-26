import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <>
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans transition-colors duration-300">

    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    </Routes>

    </div>
    </>
  );
}

export default App;