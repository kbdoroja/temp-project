import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import SuccessPopup from "./SuccessPopup";

const AddToCartPopup = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addToCart } = useCart();

  const handleQuantityChange = (e) => {
    const value = Math.min(Math.max(1, parseInt(e.target.value) || 1), product.stocks);
    setQuantity(value);
  };

  const handleAdd = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="popup-overlay">
      <div className="add-to-cart-popup">
        <h3>Add {product.name} to Cart</h3>
        <div className="quantity-control">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max={product.stocks}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <span>Available: {product.stocks}</span>
        </div>
        <div className="popup-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="confirm-btn" onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>

      {showSuccess && (
        <SuccessPopup 
          message={`${product.name} added to cart!`}
          onClose={() => {
            setShowSuccess(false);
            onClose();
          }}
        />
      )}
    </div>
  );
};

export default AddToCartPopup;