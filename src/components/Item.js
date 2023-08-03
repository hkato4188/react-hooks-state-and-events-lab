import React, { useState } from "react";

function Item({ name, category }) {
  //user clicks button element and the item is added to the cart
  //change is displayed by updating the className on the li to in-cart

  const [inCart, setInCart] = useState(false);
  const handleButtonClick = () => setInCart((inCart) => !inCart);

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleButtonClick} className="add">
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
