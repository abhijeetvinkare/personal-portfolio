import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Sidebar />
      <main style={{marginLeft:"100px"}}>
        <Home />
      </main>
    </>
  );
}

export default App;
