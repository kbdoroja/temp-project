import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserHomepage from "./pages/user/UserHomepage";
import CartPage from "./pages/user/CartPage";
import OrdersPage from "./pages/user/OrdersPage";
import ProfilePage from "./pages/user/ProfilePage";
import EditProfilePage from "./pages/user/EditProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHomepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;