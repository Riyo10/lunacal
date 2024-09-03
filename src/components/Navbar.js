import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-[#3d5257] rounded-md p-4">
      {" "}
      {/* Navbar card with dark background */}
      <div className="flex flex-col">
        {/* Navbar */}
        <div className="bg-[#000000] rounded-2xl flex justify-center items-center mb-4">
          {["about me", "experiences", "recommended"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded-md transition duration-300 mx-8 ${
                activeTab === tab
                  ? "bg-transparent"
                  : "hover:bg-[#dbe3f0] text-white hover:bg-opacity-50"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
              {/* Capitalize tab text */}
            </button>
          ))}
        </div>

        {/* Paragraphs */}
        <div className="text-white">
          <p className="mb-4">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
          </p>
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
