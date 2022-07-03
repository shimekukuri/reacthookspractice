import React, { useEffect, useState } from "react";

export default function List(props) {
  const [items, setItems] = useState([]);
  const { getItemsList } = props;
  const [timesChanged, setTimesChanged] = useState(0)

  useEffect(() => {
    setItems(getItemsList(2));
    setTimesChanged(prev => prev + 1);
    console.log("items changed");
  }, [getItemsList]);

  return <>
    <div>
        <h2>items list</h2>
        {Number.isInteger(items.length) && items.map((item, i) => <div key={item}>{item}</div>)}
    </div>
    <div>
        useCallback has rendered: {timesChanged} times. 
    </div>
  </>;
}
