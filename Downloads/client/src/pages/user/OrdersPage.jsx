import React, { useState } from "react";
import "../../styles/orders.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OrderListCard from "../../components/OrderListCard";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [orders, setOrders] = useState([
    // Sample orders
    {
      id: 1,
      items: [
        { id: 1, name: "Carrot", price: 30, quantity: 2, image: "https://static.vecteezy.com/system/resources/previews/028/584/695/non_2x/carrot-3d-rendering-icon-illustration-free-png.png" },
        { id: 2, name: "Tomato", price: 25, quantity: 3, image: "https://static.vecteezy.com/system/resources/thumbnails/017/209/833/small_2x/tomato-3d-icon-illustration-png.png" }
      ],
      total: 135,
      date: "2023-06-15T14:30:00",
      status: "pending"
    },
  ]);

  const filteredOrders = orders.filter(order => order.status === activeTab);

  const cancelOrder = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "cancelled" } : order
    ));
  };

  return (
    <div className="orders-page">
      <Navbar />
      
      <div className="container">
        <h1 className="orders-title">My Orders</h1>
        
        <div className="orders-tabs">
          <button 
            className={`tab-btn ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button 
            className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
          <button 
            className={`tab-btn ${activeTab === "cancelled" ? "active" : ""}`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled
          </button>
        </div>
        
        <div className="orders-container">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <OrderListCard 
                key={order.id}
                order={order}
                onCancel={cancelOrder}
                activeTab={activeTab}
              />
            ))
          ) : (
            <p className="no-orders">No {activeTab} orders found</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrdersPage;