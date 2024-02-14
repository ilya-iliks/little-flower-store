// import React from "react";
import { useState } from "react";
import styles from "./Test.module.css";

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

  // let colors = ["red", "blue", "green", "yellow"];

  // let index = colors.indexOf("green");

  // if (index !== -1) {
  //   colors.splice(index, 1);
  // }
  let testButton3 = (index) => {
    // let indexTest = colors.indexOf("id: ", index);
    // console.log("id: ", index);
    // if (index !== -1) {
    //   colors.splice(index, 1);
    // }
    console.log(array)
    console.log("id: ", index);
    const newArray = [...array, text];
    setArray(newArray);
  };

  return (
    <div>
      {array.map((item, index) => (
        <p
          className={styles.test_item_basket}
          key={index}
          // onClick={() => console.log("id: ", index)} определяет индекс товара и работает
          onClick={testButton3} 
        >
          {item}
          <div className={styles.test_button}>Кнопка</div>
        </p>
      ))}

      <button onClick={testButton1}>Товар 1</button>
      <button onClick={testButton2}>Товар 2</button>
      <button onClick={testButton3}>Удалить товар</button>
    </div>
  );
};

export default Test;
