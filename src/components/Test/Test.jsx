// import React from "react";
import { useState } from "react";
// import styles from "./Test.module.css";

const Test = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  function handleClick() {
    const newArray = [...array, text];
    setArray(newArray);
    setText("");
  }

  let testButton1 = () => {
    const newArray = [...array, text];
    setArray(newArray);
    setText("Товар 1");
  };

  let testButton2 = () => {
    const newArray = [...array, text];
    setArray(newArray);
    setText("Товар 2");
  };

  let testButton3 = () => {
    const newArray = [...array, text];
    setArray(newArray);
    setText("Товар 3");
  };



  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleClick()}>Добавить текст</button>
      {array.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <button onClick={testButton1}>Товар 1</button>
      <button onClick={testButton2}>Товар 2</button>
      <button onClick={testButton3}>Товар 3</button>

     
    </div>
  );
};

export default Test;

// Это тестовая компонента
