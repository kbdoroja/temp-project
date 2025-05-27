import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/editprofilepage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EditProfilePage = () => {
  const navigate = useNavigate();
  // sample user data
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "123 Main St, City"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // save to backend
    console.log("Updated profile:", user);
    navigate("/profile");
  };

  return (
    <div className="edit-profile-page">
      <Navbar />
      
      <div className="container">
        <h1 className="edit-profile-title">Edit Profile</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={user.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button 
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="save-btn"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default EditProfilePage;