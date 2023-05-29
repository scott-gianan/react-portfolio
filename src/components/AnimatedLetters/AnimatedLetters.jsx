//react
import { useState, useEffect } from "react";
//styling
import "./AnimatedLetters.scss";

function AnimatedLetters({ strArray, idx }) {
  useEffect(() => {
    const interval = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(interval);
    };
  }, []);
  return (
    <span>
      {strArray.map((char, i) => {
        return (
          <span key={char + i} className={`text-animate _${i + idx}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetters;
