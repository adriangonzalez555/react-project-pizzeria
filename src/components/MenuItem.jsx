// Import necessary dependencies
import React from 'react'

// MenuItem component
function MenuItem({ image, name, price, description }) {
  return (
    // Container for a menu item
    <div className='menuItem'>
      {/* Display the image as the background */}
      <div style={{ backgroundImage: `url(${image})` }}></div>
      {/* Display the name of the item */}
      <h1>{name}</h1>
      {/* Display the price of the item */}
      <p>${price}</p>
      {/* Display the description of the item */}
      <p>{description}</p>
    </div>
  )
}

// Export the MenuItem component as the default export
export default MenuItem;
