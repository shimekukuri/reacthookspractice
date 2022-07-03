import React, { useEffect, useState } from "react";

export default function List(props) {
  const [items, setItems] = useState([]);
  const { getItemsList } = props;

  useEffect(() => {
    setItems(getItemsList(2));
    console.log("items changed");
  }, [getItemsList]);

  return <>
    <div>
        <h2>items list</h2>
        {Number.isInteger(items.length) && items.map((item, i) => <div key={item}>{item}</div>)}
    </div>
  </>;
}
