function RegisterForm({ onSwitchToLogin }) {
  return (
    <div>
      <h2 className="login-title">Sign Up</h2>
      
      <div className="form-group">
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          type="text"
          className="form-input"
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Last Name</label>
        <input
          id="Last_name"
          type="text"
          className="form-input"
          placeholder="Enter you surname"
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          id="Address"
          type="text"
          className="form-input"
          placeholder="Enter you address"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-input"
          placeholder="Enter your email"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="form-input"
          placeholder="Create a password"
        />
      </div>
      
      <button className="login-button">
        Sign Up
      </button>

      <div className="switch-form">
        <button onClick={onSwitchToLogin}>
          Already have an account? Log in
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;