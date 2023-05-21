// Import necessary dependencies and styles
import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/navbar.css";

// Navbar component
function navbar() {
  // State to control the visibility of links in the left side of the navbar
  const [openLinks, setOpenLinks] = useState(false);

  // Function to toggle the visibility of links in the left side of the navbar
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  
  return (
    // Navbar container
    <div className="navbar">
      {/* Left side of the navbar */}
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        {/* Logo */}
        <img src={Logo}></img>
        {/* Hidden links */}
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>
      {/* Right side of the navbar */}
      <div className="rightSide">
        {/* Links to go to other sections */}
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        {/* Button to toggle the visibility of links in the left side of the navbar */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

// Export the Navbar component as the default

export default navbar;
