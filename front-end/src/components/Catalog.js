import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getAllTops } from "./../services/ProductService";

function Catalog() {
  const [Tops, setTops] = useState([]);

  useEffect(() => {
    getAllTops().then((res) => setTops(res.products));
  }, []);

  return (
    <div>
      <h1>Catalog</h1>
      <ProductList Tops={Tops} />
    </div>
  );
}

export default Catalog;
