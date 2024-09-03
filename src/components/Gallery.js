import React, { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = () => {
    const newImage = prompt("Enter image URL:");
    if (newImage) {
      setImages([...images, newImage]);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* Gallery button */}
        <button className="bg-black text-white py-2 px-4 rounded-md">
          Gallery
        </button>

        {/* Navigation and Add Image buttons */}
        <div className="flex items-center gap-2">
          <button
            className="bg-slate-500 text-white rounded-2xl py-2 px-4 shadow-lg"
            onClick={handleAddImage}
          >
            + ADD IMAGE
          </button>

          {/* Previous Button with SVG Icon */}
          <button
            onClick={handlePrevious}
            className="bg-slate-800 text-gray-400 p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>

          {/* Next Button with SVG Icon */}
          <button
            onClick={handleNext}
            className="bg-slate-800 text-gray-400 p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Display images with hover effect */}
      <div className="flex justify-center items-center mt-4 gap-4 rounded-md">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-24 h-24 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
