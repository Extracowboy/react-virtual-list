import React from "react";
import "./styles.css";

import List from "./VirtualList";

export default function App() {
  return (
    <div className="App">
      <h1>Here is an example of custom virtual list</h1>
      <List
        rowCount={10000}
        rowRenderer={(rowIndex) => {
          return `This is record #${rowIndex}`;
        }}
        width={500}
        height={600}
      />
    </div>
  );
}
