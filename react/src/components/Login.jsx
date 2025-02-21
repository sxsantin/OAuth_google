import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const googleLogin = () => {
    console.log("logging in with google")
    window.location.href = 'http://localhost:5050/login/google';
  };


  const handleLocalLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/login/local', {
        email,
        password
      });
      navigate('/home'); // Navigate to home page
      alert('Iniciaste sesión!');
    } catch (error) {
      alert('Algo fallo!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleLocalLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter Email ...' />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required  placeholder='Enter Password ...'/>
        <button type="submit">Login</button>
      </form>
      <div className="google-login">
        <p>O inicia sesión con:</p>
        <button onClick={googleLogin}>Google</button>
        <p>No tienes cuenta? <Link to="/register">Registrate aquí</Link></p>
      </div>
    </div>
  );
}

export default Login;