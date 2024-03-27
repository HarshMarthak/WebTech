import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic, e.g., call login function
    login(email, password);
  };

const redirectToHome = () =>{
    navigate('/') 
}  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button onClick={()=> redirectToHome()} type="submit" className="btn btn-primary" >Login</button>
              </form>
              <p className="mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
