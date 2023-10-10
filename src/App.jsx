import React from "react";
import styled from "styled-components";
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

const Main = styled.main`
  margin-left: 100px;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

function App() {
  return (
    <>
      <Sidebar />
      <Main>
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

export default App;
