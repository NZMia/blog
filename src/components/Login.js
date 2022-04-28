import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../stores/authSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;
    dispatch(register({ username, password }));
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__userName">
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" />
      </div>

      <div className="login__password">
        <label htmlFor="username">Password</label>
        <input type="password" id="password" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
