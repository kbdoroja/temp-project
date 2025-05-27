import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cart.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CartListCard from "../../components/CartListCard";
import { useCart } from "../../contexts/CartContext";
import empty_cart from "../../assets/empty_cart.png";

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    calculateTotal, 
    createOrder 
  } = useCart();
  
  const navigate = useNavigate();
  const shippingFee = 50;

  const handleConfirmOrder = () => {
    const newOrder = createOrder();
    navigate("/orders");
    // send the order to backend
    console.log("Order created:", newOrder);
  };

  return (
    <div className="cart-page">
      <Navbar />
      
      <div className="container">
        <h1 className="cart-title">My Shopping Cart</h1>
        
        <div className="cart-items-container">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartListCard 
                key={item.id}
                item={item}
                onRemove={() => removeFromCart(item.id)}
                onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
              />
            ))
          ) : (
            <div className="empty-cart-container">
              <p className="empty-cart-message">Your cart is empty</p>
              <img src={empty_cart} alt="Empty cart" className="empty_cart" />
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary-row">
              <span>Item Subtotal:</span>
              <span>PHP {calculateTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping Fee:</span>
              <span>PHP {shippingFee.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>PHP {(calculateTotal() + shippingFee).toFixed(2)}</span>
            </div>
            
            <button 
              className="confirm-order-btn"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;