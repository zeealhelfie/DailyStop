import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response.data.message);

      const { token } = response.data;

      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered? <Link to="/login">login</Link>
      </p>
    </form>
  );
};

export default Signup;
