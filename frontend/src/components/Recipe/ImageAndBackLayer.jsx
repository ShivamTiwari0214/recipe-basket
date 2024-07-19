import React, { useState, useEffect } from 'react';
import './ImageAndBackLayer.css';

const ImageAndBackLayer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="imageAndBackLayer">
      {isVisible && (
        <>
          <div className="imageBackLayer">
            <div className="rectangle5" />
            <div className="pexelsShvetsProduction" />
          </div>
          <div className="image">
            <div className="imageRect" />
            <img
              className="imagePlaceholder" // <img src={recipe.imageUrl} alt={recipe.name} /> Maybe we can fetch image through this. Replace it when needed.
              src="https://www.cookwithmanali.com/wp-content/uploads/2022/02/15-Minute-Easy-Kadai-Paneer.jpg"
              alt="Placeholder"
            /> 
          </div>
        </>
      )}
    </div>
  );
};

export default ImageAndBackLayer;
