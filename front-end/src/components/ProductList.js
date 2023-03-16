import React from "react";
import Card from "./shared/Card";
import "./ProductList.css";

function ProductList(props) {
  return (
    <div className="category-container">
      <div>
        {props.Tops.map((top) => (
          <Card key={top.id}>
            <h2>{top.title}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
