import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from 'universal-cookie';

import './Login.css';

const cookies = new Cookies();
axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get("jwt_access")}`;



const server_url = "http://127.0.0.1:3000/api/v1/registration";


const LoginForm = () => {


  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  const handleSubmitLogin = (event) => {
    event.preventDefault();

    if (!emailLogin || !passwordLogin) {
      setError('Please fill in all fields.');
      alert(error);
      return;
    } else {
      const user = {
        email: emailLogin,
        password: passwordLogin
      }
    axios.post(server_url, user)
    .then(response => {
      console.log('Success:', response);
      cookies.set('jwt_access', JSON.stringify(response.data.token))
      cookies.set('user_id', JSON.stringify(response.data.user.id))
      cookies.set('username', JSON.stringify(response.data.user.username))
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      navigate('/profiles')
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error)
    });
    }

  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmitLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={emailLogin} onChange={(event) => setEmailLogin(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={passwordLogin} onChange={(event) => setPasswordLogin(event.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default LoginForm;
