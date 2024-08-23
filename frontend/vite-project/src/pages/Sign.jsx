import { useState } from 'react';
import axios from 'axios';
import "../styles/Sign.css";

const Sign = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your login endpoint
      const response = await axios.post('http://127.0.0.1:8000/signin', loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Login Response:', response.data);
      // Handle successful login (e.g., store token, redirect user)
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your signup endpoint
      const response = await axios.post('http://127.0.0.1:8000/signup/', signupData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Signup Response:', response.data);
      // Handle successful signup (e.g., redirect user, show success message)
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="container">
      <input type="checkbox" id="check" checked={isSignup} onChange={() => setIsSignup(!isSignup)} />
      
      <div className={`login form ${isSignup ? 'hidden' : ''}`}>
        <header>Login</header>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your email"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <a href="#">Forgot password?</a>
          <input type="submit" className="button" value="Login" />
        </form>
        <div className="signup">
          <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
        </div>
      </div>
      
      <div className={`registration form ${isSignup ? '' : 'hidden'}`}>
        <header>Signup</header>
        <form onSubmit={handleSignupSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
            value={signupData.username}
            onChange={handleSignupChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={signupData.email}
            onChange={handleSignupChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={signupData.password}
            onChange={handleSignupChange}
            required
          />
          <input type="submit" className="button" value="Signup" />
        </form>
        <div className="signup">
          <span className="signup">Already have an account? <label htmlFor="check">Login</label></span>
        </div>
      </div>
    </div>
  );
};

export default Sign;
