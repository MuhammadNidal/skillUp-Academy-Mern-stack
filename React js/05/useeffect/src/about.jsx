import React from "react";
import
  { useEffect } from "react";

const about = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 3000);

  return () => {
    clearInterval(timer);
  };
}, []);
  return (
    <div>
      <h1>about us screen</h1>
    </div>
  );
};

export default about;
