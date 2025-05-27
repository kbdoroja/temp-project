import { useState, useContext } from "react";
import background from "../assets/login_bg.png";
import logo from "../assets/logo.png";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/login.css"; 

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="login-left">
          <h1 className="login-greeting">Hello, there.</h1>
          <h2 className="login-welcome">Welcome to</h2>
          <img src={logo} alt="Crop2Cart" className="login-logo" />
      </div>

      <div className="login-wrapper">
        <div className="login-right glass-panel">
          {isLogin ? (
            <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
}


export default Login;