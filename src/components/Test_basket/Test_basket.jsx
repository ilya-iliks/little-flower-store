import React, { useState } from "react";
// import styles from "./Test_basket.module.css";
import "./Test_basket.css";

const Test_basket = () => {
  let [cartOpen, setCartOpen] = useState(false); // изначально корзина у нас не открыта (false)
  return (
    <div className="header">
      <div onClick={() => {setCartOpen(cartOpen = !cartOpen)}} className={`shop-cart-button ${cartOpen && 'active'}`}>корзина</div>
      {/* cartOpen = !cartOpen это значит что по нажатию будет противоположное значение false-true */} 
      {/* shop-cart-button наш стандартный класс */} 
      {/*${} используется для написания стандартного js выражения */} 
      {/* ${cartOpen } это обращение к картопен */} 
      {/* если cartOpen будет со значением true то  && эти два амперсанта проверяют наше выражение и если оно верное то в таком случае мы будем добавлять класс active */} 

      {cartOpen && (
        <div className="shop-cart"></div>
      )};
      {/* написанное выше значит что если картопен тру то мы выводи блок */}
    </div>
  );
};

export default Test_basket;
// Важно ! од не работает если используем модули css так что надо разобраться как с ними работать
