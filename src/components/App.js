import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isAppDark, setAppDark] = useState(false);
  const appClass = isAppDark ? "App dark" : "App light";

  function handleClick() {
    setAppDark((isAppDark) => !isAppDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
