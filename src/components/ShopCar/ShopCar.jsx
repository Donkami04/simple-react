import { useState } from "react";
import "./ShopCar.css";

export function ShopCar({ products }) {
  return (
    <div className="shopcar-container">
      {/* Aqui va el total de la compra */}
      {products.map((item, index) => (
        <div className="container-product-selected-shopcar" key={index}>
          <img
            className="image-container-product-selected-shopcar"
            src={item.image}
          />
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
