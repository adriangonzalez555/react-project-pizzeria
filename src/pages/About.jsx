import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

// About page
function About() {
  return (
    // About section of the page with an image and text about the company
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Sobre Nosotros</h1>
        <p> Establecimiento comercial en que se elaboran y se venden pizzas.
            Restaurante especializado en la preparación de pizzas y otras comidas italianas. </p>
      </div>
    </div>
  );
}

export default About;
