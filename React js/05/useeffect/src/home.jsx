import React from "react";
import { Link } from "react-router-dom";

const home = () => {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Link to="/product/101">Product 101</Link>
      <Link to="/product/202">Product 202</Link>
    </nav>
  );
};

export default home;
