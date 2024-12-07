import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Component/Product/Product";
import axios from "axios";

function HomeScreen() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products");

      setProduct(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
