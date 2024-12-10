(
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
        </Container>
      </main>
      <Footer />
    </Router>
  );