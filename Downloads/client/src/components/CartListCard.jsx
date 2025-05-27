import React from "react";

const CartListCard = ({ item, onRemove, onQuantityChange }) => {
  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0 && newQuantity <= item.stocks) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="cart-item-card">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <p className="item-price">PHP {(item.price * item.quantity).toFixed(2)}</p>
      </div>
      
      <div className="item-quantity">
        <button 
          onClick={() => handleQuantityChange(-1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button 
          onClick={() => handleQuantityChange(1)}
          disabled={item.quantity >= item.stocks}
        >
          +
        </button>
      </div>
      
      <button 
        className="remove-item-btn"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default CartListCard;