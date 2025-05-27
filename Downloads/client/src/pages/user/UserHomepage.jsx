import React, { useState } from "react";
import "../../styles/userhomepage.css";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import AddToCartPopup from "../../components/AddToCartPopup";
import SuccessPopup from "../../components/SuccessPopup";
import { useCart } from "../../contexts/CartContext";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const UserHomepage = () => {
  const [products, setProducts] = useState([
    // saample products (would come from backend)
    { id: 1, name: "Carrot", description: "Fresh organic carrots, rich in vitamin A and antioxidants.", category: "crop", price: 30.00, stocks: 5, image: "https://static.vecteezy.com/system/resources/previews/028/584/695/non_2x/carrot-3d-rendering-icon-illustration-free-png.png" },
    { id: 2, name: "Tomato", description: "Fresh organic carrots, rich in vitamin A and antioxidants.", category: "crop", price: 30.00, stocks: 5, image: "https://static.vecteezy.com/system/resources/thumbnails/017/209/833/small_2x/tomato-3d-icon-illustration-png.png" },
    { id: 3, name: "Pepper", description: "Fresh organic carrots, rich in vitamin A and antioxidants.", category: "crop", price: 30.00, stocks: 5, image: "https://static.vecteezy.com/system/resources/thumbnails/045/808/194/small_2x/fresh-ripe-bell-pepper-isolated-on-a-transparent-background-png.png" },
    { id: 4, name: "Eggplant", description: "Fresh organic carrots, rich in vitamin A and antioxidants.", category: "crop", price: 25.00, stocks: 8, image: "https://static.vecteezy.com/system/resources/thumbnails/015/099/578/small_2x/3d-eggplant-illustration-png.png" },
    { id: 5, name: "Chicken", description: "Fresh organic carrots, rich in vitamin A and antioxidants.", category: "poultry", price: 150.00, stocks: 3, image: "https://static.vecteezy.com/system/resources/previews/042/169/714/non_2x/ai-generated-3d-rendering-of-a-raw-chicken-meat-on-transparent-background-ai-generated-free-png.png" },
    { id: 6, name: "Eggs", description: "Fresh organic carrots, rich in vitamin A and antioxidants.", category: "poultry", price: 10.00, stocks: 20, image: "https://static.vecteezy.com/system/resources/thumbnails/043/987/731/small_2x/egg-3d-icon-png.png" },
  ]);

  const [sortDirection, setSortDirection] = useState('desc');
  const [sortBy, setSortBy] = useState("name");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowAddPopup(true);
  };

  const confirmAddToCart = (quantity) => {
    addToCart(selectedProduct, quantity);
    setShowAddPopup(false);
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 2000);
  };

  const sortedProducts = [...products].sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === "name") comparison = a.name.localeCompare(b.name);
    else if (sortBy === "price") comparison = a.price - b.price;
    else if (sortBy === "stocks") comparison = a.stocks - b.stocks;
    else if (sortBy === "type") comparison = a.category.localeCompare(b.category);
    
    return sortDirection === 'desc' ? comparison : -comparison;
  });

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="user-homepage-scope">
      <div className="user-homepage">
      <Navbar />
      
      <div className="container">
        
        <div className="sort-section">
          <h2>Sort by:</h2>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stocks">Stocks</option>
          <option value="type">Type</option>
          </select>

          <button 
            onClick={toggleSortDirection}
            className="sort-direction-btn"
            aria-label={`Sort ${sortDirection === 'desc' ? 'ascending' : 'descending'}`}
          >
            {sortDirection === 'desc' ? (
              <FaSortAmountDown className="sort-icon" />
            ) : (
              <FaSortAmountUp className="sort-icon" />
            )}
          </button>
        </div>

        <div className="products-container">
          <div className="products-grid">
            {sortedProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {showAddPopup && (
        <AddToCartPopup
          product={selectedProduct}
          onConfirm={confirmAddToCart}
          onClose={() => setShowAddPopup(false)}
        />
      )}
    </div>
    </div>
    
  );
};

export default UserHomepage;