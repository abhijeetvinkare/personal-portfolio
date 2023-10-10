import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Certifications from "./pages/Certifications/Certifications";
import Testimonials from "./pages/Testimonials/Testimonials";
import Services from "./pages/Services/Services";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Sidebar />
      <main style={{marginLeft:"100px"}}>
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
