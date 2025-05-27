import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

function LoginForm({ onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2 className="login-title">Log In</h2>
      
      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input
          id="email"
          type="text"
          className="form-input"
          placeholder="Enter your email"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-input-container">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="form-input"
            placeholder="Enter your password"
          />
          <button 
            type="button" 
            className="password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp  />}
          </button>
        </div>
      </div>
      
      <button className="login-button">
        Log In
      </button>

      <div className="switch-form">
        <button onClick={onSwitchToRegister}>
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
}

export default LoginForm;