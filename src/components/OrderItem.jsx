import React, { useContext } from "react";

import close from "@icons/icon_close.png";
import { AppContext } from "../context/AppContext";
const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={handleRemove} />
    </div>
  );
};

export default OrderItem;
