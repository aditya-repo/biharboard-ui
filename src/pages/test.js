import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const items = [
  { id: 1, name: 'Item 1', imgSrc: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Item 2', imgSrc: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Item 3', imgSrc: 'https://via.placeholder.com/150' },
];

const ImageElemenet = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Image Modal Example</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(item => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow hover:bg-gray-200 cursor-pointer"
            onClick={() => handleClick(item.imgSrc)}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageElemenet;
