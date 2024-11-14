import React, { useEffect, useRef } from 'react';
import animateCircles from './Cursor';
import './cursor.css';

const Cursor = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    animateCircles(circlesRef.current); // Call animateCircles with the refs to circles

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", animateCircles);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: 22 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </div>
  );
};

export default Cursor;
