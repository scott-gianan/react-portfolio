//react
import { useState, useEffect } from "react";
//styling
import "./AnimatedLetters.scss";

function AnimatedLetters({ strArray, idx }) {
  const [letterClass, setLetterClass] = useState("text-animate");

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
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetters;
