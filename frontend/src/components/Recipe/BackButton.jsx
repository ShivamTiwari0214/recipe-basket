import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Adding a 2.5-second delay before navigating
    setTimeout(() => {
      navigate('/');
    }, 2500); // 2500 milliseconds delay
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="back-button" onClick={handleClick}>
      <div className="frame3">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <div className="back">Back</div>
      </div>
    </div>
  );
};

export default BackButton;
