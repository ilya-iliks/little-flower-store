import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">logo</div>
        <div className="header-search">search</div>
        <div className="select-delivery-address">select delivery address</div>
        <div className="button-1">b1</div>
        <div className="button-2">b2</div>
        <div className="button-3">b3</div>
      </div>
      <div className="block-central">
        <div className="product-categories">Категории товаров</div>
        <div className="banner">banner</div>
        <div className="search">search</div>
        <p>Букеты</p>  {/* w186xh70 */}
        <div className="choice-of-colors">
          <div className="button-roses">roses</div>
          <div className="button-boxes">boxes</div>
          <div className="button-bouquets">bouquets</div>
        </div>
      </div>
      <div className="additional-block"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

