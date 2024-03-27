import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Simulated login logic
    if (email === 'user@example.com' && password === 'password') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleSignup = (email, password) => {
    // Simulated signup logic
    alert(`Signed up with email: ${email}`);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/signup" element={<Signup/>}>
          </Route>
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
