import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./Component/Header/Header";
import Footer from './Component/Footer/Footer'
import HomeScreen from "./screen/HomeScreen";

function App() {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
        <HomeScreen />
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
