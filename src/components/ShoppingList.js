import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectedFilter = (e) => {
    setSelectedCategory(() => e.target.value);
  };
  console.log(items);
  const displayedItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else if (item.category === selectedCategory) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedFilter}>
          <option value="All">Filter by category</option>e
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
