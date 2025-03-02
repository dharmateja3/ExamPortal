import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginStudent = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/student', { email, password, role: 'student' });
      console.log('Login response:', response);
      if (response.data.token) {
        onLogin(response.data.username);
        navigate('/dashboard');
      } else {
        alert('Login failed'); 
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. User Role is Invlaid');
    }
  };

  return (
    <div className='d-flex justify-content-center'>
        <div className='bg-light p-5 mt-5 border border-dark rounded'>
      <h2>Login as Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <center><button type="submit" className="btn btn-primary">Login</button></center>
      </form>
      </div>
    </div>
  );
};

export default LoginStudent;
