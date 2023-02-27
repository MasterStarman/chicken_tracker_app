import React, { useState } from "react";
import ChickenList from "./ChickenList";

function App() {
  const [chickens, setChickens] = useState([
    {
      id: 1,
      name: "Joseph",
      date: "1/23/23",
    },
  ]);
  return (
    <>
      <ChickenList chickens={chickens} />
      <div>
        <input type={"text"}></input>
      </div>
      <button className="button">Add Chicken</button>
      <button className="button">Remove Chicken</button>
      <button className="button">Update Chicken</button>
      <div className="chickenCounter">0 Total Chickens</div>
    </>
  );
}

export default App;
