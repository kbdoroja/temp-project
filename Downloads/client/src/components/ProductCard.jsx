import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="product-card">
      <div 
        className="product-image-container"
        onClick={() => setShowDescription(!showDescription)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
          }}
        />
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">PHP {product.price.toFixed(2)}</p>
        <p className="product-stocks">Stocks: {product.stocks}</p>

        {showDescription && (
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        )}
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;