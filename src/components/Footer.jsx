// Import necessary dependencies and styles
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

// Footer component
function Footer() {
  return (
    // Footer section
    <div className="footer">
      <div className="socialMedia">
        {/* Social media icons */}
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedinIcon />
      </div>
      {/* Copyright notice */}
      <p> &copy; 2023 Gonza´sPizza.com</p>
    </div>
  );
}

// Export the Footer component as the default export
export default Footer;
