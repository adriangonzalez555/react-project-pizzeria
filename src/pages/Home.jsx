import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";


// Home page
function Home() {
  return (
    // Banner image
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        {/* Banner text */}
        <h1>Gonza´s Pizzeria</h1>
        <p>La mejor pizza que probarás</p>
        {/* Button to go to menu */}
        <Link to="/menu">
          <button>Haz tu pedido ahora</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
