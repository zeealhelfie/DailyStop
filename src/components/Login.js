import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Logging in...");
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      console.log("Login response:", response.data);

      const { token } = response.data;
      localStorage.setItem("token", token);

      console.log("Login successful!");

      // Redirect or update state to reflect user login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <form>
      <h3>Login</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
      <p className="forgot-password text-right">
        Not registered yet? <a href="/signup">Sign up</a>
      </p>
    </form>
  );
};

export default Login;
