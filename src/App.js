import React, { useState, useEffect } from "react";
import "./App.css";
import MemoPractice from "./componants/useMemo.js";
import UseCallbackPractice from "./componants/useCallback";
import UseReducerPractice from "./componants/useReducer";

function App() {
  const [selectedComponant, setSelectedComponant] = useState();
  const SelectedComponant = selectedComponant;

  const handleComponentSelection = (e) => {
    setSelectedComponant(e.target.value);
  };

  return (
    <>
      <div className="componant-container">
        <h1 style={{color: "white"}}>Select a componant</h1>
        <select value={selectedComponant} onChange={handleComponentSelection}>
          <option value={`selectComponent`}>
            Select a componant to render
          </option>
          <option value={`memo`}>useMemo Practice</option>
          <option value={`callback`}>useCallback Practice</option>
          <option value={`reducer`}>useReducer Practice</option>
        </select>
      </div>
      {selectedComponant === `memo` && <MemoPractice />}
      {selectedComponant === `callback` && <UseCallbackPractice />}
      {selectedComponant === `reducer` && <UseReducerPractice />}
    </>
  );
}

export default App;
