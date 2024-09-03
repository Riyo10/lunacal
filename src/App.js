import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import "./index.css";

function App() {
  return (
    <div className="flex h-screen bg-[#3c474a]">
      {" "}
      {/* Main page background color */}
      {/* Left half of the screen (empty) */}
      <div className="w-1/2 hidden lg:block"></div>
      {/* Right half of the screen with two widgets */}
      <div className="w-full lg:w-1/2 p-4 space-y-6">
        {/* First Widget with Navbar */}
        <div className="bg-[#3d5257] shadow-lg rounded-md p-4">
          {" "}
          {/* Card with consistent bg color */}
          <Navbar />
        </div>

        {/* Second Widget with Gallery */}
        <div className="bg-[#3d5257] shadow-lg rounded-md p-4">
          {" "}
          {/* Second card with consistent bg color */}
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
