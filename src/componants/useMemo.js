import React, { useState, useEffect, useMemo } from "react";

export default function MemoPractice() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);
  const [timesLoaded, setTimesLoaded] = useState(0);
 
  const longFunc = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const doubleNumber = useMemo(() => {
    setTimesLoaded(prev => prev + 1);
    return longFunc(number);
  }, [number]);

  const themestyle = {
        backgroundColor: (theme ? `black` : `white`),
        color: (theme ? `white` : `black`)
  }

  console.log(themestyle)

  return (
    <>
      <div style={themestyle}>
        <input type="number" value={number} onChange={(e) => {setNumber(parseInt(e.target.value))}} />
        <h1>{doubleNumber}</h1>
        <button onClick={() => setTheme(prev => !prev)}>Click to Change Theme</button>
      </div>
      <div>
        useMemo and long running function called {timesLoaded} times
      </div>
    </>
  );
}
