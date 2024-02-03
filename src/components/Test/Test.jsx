// import React from "react";
import { useState } from "react";
// import styles from "./Test.module.css";

const Test = () => {
  const [array, setArray] = useState([]);

  let testButton1 = () => {
    let text = "Товар 1";
    const newArray = [...array, text];
    setArray(newArray);
  };

  let testButton2 = () => {
    let text = "Товар 2";
    const newArray = [...array, text];
    setArray(newArray);
  };
  return (
    <div>
        {array.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button onClick={testButton1}>Товар 1</button>
      <button onClick={testButton2}>Товар 2</button>
    </div>
  );
};

export default Test;
