import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import emailIcon from '../images/email.png';
import passwordIcon from '../images/password.png';
import usericon from '../images/person.png';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Mouse tracking state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement and update state
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && emailInput && passwordInput) {
      console.log('Logged in successfully!');
      onLogin();
      navigate('/');
    } else {
      setErrorMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="login-container">
      {/* Mouse effect */}
      <div
        className="mouse-effect"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      ></div>

      <div className="login-header">
        <h1>Login to Your Account</h1>
        <p>Access the best food deals and features!</p>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <img src={usericon} alt="User Icon" />
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <img src={emailIcon} alt="Email Icon" />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <img src={passwordIcon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="login-footer">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
