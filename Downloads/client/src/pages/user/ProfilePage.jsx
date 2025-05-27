import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profilepage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProfilePage = () => {
  const navigate = useNavigate();
  // sample user data (backend)
  const [user, setUser] = React.useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    address: "123 Main St, City"
  });

  const handleLogout = () => {
    // backend
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleEditProfile = () => {
    navigate("/profile/edit");
  };

  return (
    <div className="profile-page">
      <Navbar />
      
      <div className="container">
        <h1 className="profile-title">My Profile</h1>
        
        <div className="profile-info">
          <div className="profile-field">
            <span className="field-label">First Name:</span>
            <span className="field-value">{user.firstName}</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Last Name:</span>
            <span className="field-value">{user.lastName}</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Email:</span>
            <span className="field-value">{user.email}</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Address:</span>
            <span className="field-value">{user.address}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button 
            className="edit-profile-btn"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;