import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";

// Menu list with all the pizzas and their information (name, image, price and description)

export const MenuList = [
  {
    name: "Pizza de Pepperoni",
    image: Pepperoni,
    price: 11.99,
    description: "Pizza con salsa de tomate, queso mozzarella y pepperoni.",
  },
  {
    name: "Pizza Margherita",
    image: Margherita,
    price: 11.99,
    description: "Pizza con salsa de tomate, queso mozzarella y albahaca fresca.",
  },
  {
    name: "Gonza´s Pizza Especial",
    image: PedroTechSpecial,
    price: 25.00,
    description: "Pizza con salsa de tomate, queso mozzarella, pepperoni, jamón, cebolla, pimiento verde, champiñones, aceitunas negras y orégano.",
  },
  {
    name: "Pizza Vegana",
    image: Vegan,
    price: 17.99,
    description: "Pizza con salsa de tomate, queso vegano, pimiento verde, cebolla, champiñones y aceitunas negras.",
  },
  {
    name: "Pizza con Piña",
    image: Pineapple,
    price: 9.99,
    description: "Pizza con salsa de tomate, queso mozzarella, jamón y piña.",
  },
  {
    name: "Pizza Carbonara",
    image: Expensive,
    price: 13.99,
    description: "Pizza con salsa carbonara, queso mozzarella, bacon, cebolla y champiñones.",
  },
];
