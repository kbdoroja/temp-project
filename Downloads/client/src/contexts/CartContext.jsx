import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState(() => {
    // sample orders (would come from backend)
    const sampleOrders = [
      {
        id: 1,
        items: [
          { id: 1, name: "Carrot", price: 30, quantity: 2, image: "https://example.com/carrot.jpg" },
          { id: 2, name: "Tomato", price: 25, quantity: 3, image: "https://example.com/tomato.jpg" }
        ],
        total: 135,
        date: new Date().toISOString(),
        status: "pending"
      }
    ];
    return sampleOrders;
  });

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stocks) }
            : item
        );
      }
      
      return [...prevItems, { 
        ...product, 
        quantity: Math.min(quantity, product.stocks)
      }];
    });
  };

  const createOrder = () => {
    const newOrder = {
      id: Date.now(), // Temporary ID
      items: [...cartItems],
      total: calculateTotal(),
      date: new Date().toISOString(),
      status: "pending"
    };
    
    setOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity), 
      0
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
        createOrder,
        updateOrderStatus
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);