import React, { useCallback, useEffect, useState } from "react";
import List from "./useCallbackList";

export default function UseCallbackPractice() {
  const [itemsList, setItemsList] = useState([]);
  const [theme, setTheme] = useState(false);
  const [itemsRendered, setItemsRendered] = useState(0);

  const getItemsList = useCallback(
    (n = 0) => {
      return [n + itemsList, n + 1 + itemsList, n + 2 + itemsList];
    },
    [itemsList]
  );

  const getTheme = {
    background: theme ? "white" : "black",
    color: theme ? "black" : "white",
  };

  return (
    <>
      <div style={getTheme}>
        <button onClick={() => setTheme((prev) => !prev)}>Change Theme</button>
        <h1>useCallback</h1>
        <input
          type="number"
          value={itemsList}
          onChange={(e) => setItemsList(parseInt(e.target.value))}
          placeholder="enter a number"
        />
        <List getItemsList={getItemsList}/>
      </div>
    </>
  );
}
