import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <Sidebar />
      <main style={{marginLeft:"100px"}}>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
