import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./Component/Header/Header";
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <>
    <Header />
    <main>
      <Container>
        <h1>welcome to eyob shop</h1>
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
