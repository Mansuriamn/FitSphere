import React, { useState } from "react";
import { app } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./SigLog.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthForm() {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignupActive(!isSignupActive);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const username = event.target.elements.Username.value;
    const email = event.target.elements.Email.value;
    const password = event.target.elements.Password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        console.log("Username:", username); // Capture the username if needed.
         toast.success('Create Account successfully!');
        navigate("/mood"); // Redirect after successful signup
      })
      .catch((error) => {
        console.error("Signup error:", error.message);
         toast.error('Failed to Create Account. Please Check Password at least 6 characters and try again.');
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.elements.Email.value;
    const password = event.target.elements.Password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
         toast.success('Welcome To FitSphere');
        navigate("/mood"); // Redirect after successful login
      })
      .catch((error) => {
        console.error("Login error:", error.message);
         toast.error('Failed To Login. Please try again.');
      });
  };

  return (
    <div className="main-container">
       <ToastContainer />
      <div className="form-wrapper">
        <div
          className="form-content"
          style={{
            transform: isSignupActive ? "translateX(-50%)" : "translateX(0%)",
          }}
        >
          {/* Login Form */}
          <form onSubmit={handleLogin} className={`form login-form ${!isSignupActive ? "active" : ""}`}>
            <h2>Welcome Back!</h2>
            <p>Login to your account to continue</p>
            <div className="input-group">
              <input type="email" name="Email" placeholder="Email" required />
              <span className="input-icon">📧</span>
            </div>
            <div className="input-group">
              <input type="password" name="Password" placeholder="Password at least 6 characters" required />
              <span className="input-icon">🔒</span>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p className="switch-text">
              Don’t have an account?{" "}
              <span className="toggle-form" onClick={toggleForm}>
                Sign Up
              </span>
            </p>
          </form>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className={`form signup-form ${isSignupActive ? "active" : ""}`}>
            <h2>Create Account</h2>
            <p>Sign up to explore new opportunities</p>
            <div className="input-group">
              <input type="text" name="Username" placeholder="Username" required />
              <span className="input-icon">👤</span>
            </div>
            <div className="input-group">
              <input type="email" name="Email" placeholder="Email" required />
              <span className="input-icon">📧</span>
            </div>
            <div className="input-group">
              <input type="password" name="Password" placeholder="Passwordat least 6 characters" required />
              <span className="input-icon">🔒</span>
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
            <p className="switch-text">
              Already have an account?{" "}
              <span className="toggle-form" onClick={toggleForm}>
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
