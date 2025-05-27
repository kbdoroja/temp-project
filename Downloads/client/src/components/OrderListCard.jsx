import React from "react";
import "../styles/orderlistcard.css";
import { format } from "date-fns";

const OrderListCard = ({ order, onCancel, activeTab }) => {
  const formattedDate = format(new Date(order.date), "MMMM d, yyyy 'at' h:mm a");

  return (
    <div className="order-card">
      <div className="order-header">
        <div className="order-meta">
          <span className="order-date">Ordered: {formattedDate}</span>
          <span className={`order-status ${order.status}`}>
            {order.status.toUpperCase()}
          </span>
        </div>
        {activeTab === "pending" && (
          <button 
            className="cancel-order-btn"
            onClick={() => onCancel(order.id)}
          >
            Cancel Order
          </button>
        )}
      </div>
      
      <div className="order-items">
        {order.items.map(item => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>PHP {item.price.toFixed(2)} × {item.quantity}</p>
            </div>
            <div className="item-total">
              PHP {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="order-footer">
        <div className="order-total">
          <span>Order Total:</span>
          <span>PHP {order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderListCard;