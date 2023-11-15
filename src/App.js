import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";
import Banner from "./components/Banner"; // Import the Banner component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Banner />} />{" "}
              {/* Display Banner component on root path */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/todo" element={<TodoList />} />
              {/* Other routes */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
