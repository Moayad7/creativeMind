import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
 
  return (
    <div className="App overflow-hidden bg-[#111] text-[#fff] relative">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
