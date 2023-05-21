import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

// Function for the menu page of the app to display the menu items
function Menu() {
  return (
    // Menu section of the page
    <div className="menu">
      <h1 className="menuTitle">Nuestro Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            // Display each menu item
            <MenuItem
            key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              description={menuItem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
