import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from "react-bootstrap";
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import HomeScreen from "./screen/HomeScreen.js";
import ProductScreen from "./screen/ProductScreen.js";
import CartScreen from "./screen/CartScreen.js";

function App() {
  return <>
  <HomeScreen />
  </>
}

export default App;
