import React from "react";
import "./App.css";
import Bouquets from "./components/Bouquets/Bouquets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
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
          <p>Букеты</p> {/* w186xh70 */}
          <div className="choice-of-colors">
            <div className="button-roses">
              <Link to="/buttonRoses">Розы</Link>
            </div>
            <div className="button-boxes">
              <Link to="/buttonBoxes">Коробки</Link>
            </div>
            <div className="button-bouquets">
              <Link to="/buttonBouquets" className="button-bouquets">Букеты</Link>
            </div>
          </div>
          <Routes>
            <Route
              path="/buttonRoses"
              element={<Bouquets flowersData={props.state.roseData} />}
            />
            <Route
              path="/buttonBoxes"
              element={<Bouquets flowersData={props.state.boxesData} />}
            />
            <Route
              path="/buttonBouquets"
              element={<Bouquets flowersData={props.state.bouquetsData} />}
            />
          </Routes>
          {/* <Bouquets flowersData={props.state.roseData} /> */}
          {/* <Bouquets flowersData={props.state.boxesData} /> */}
          {/* <Bouquets flowersData={props.state.bouquetsData} /> */}
        </div>
        <div className="additional-block"></div>
        <div className="footer"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;

