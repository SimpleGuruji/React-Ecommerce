import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/productList";

function Home() {
  return (
    <div>
      <Navbar Children={<ProductList />}></Navbar>
    </div>
  );
}

export default Home;
