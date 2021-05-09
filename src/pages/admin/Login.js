import React from "react";
import "../../styles/admin/Login.scss";
import data from '../../data/blog.json';
import { useState, useEffect } from "react";
import Cookie from 'js-cookie';
import { encode, decode} from "string-encode-decode";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const user = data.user;

  const handleSubmit = (e)=>{
    e.preventDefault();
    const item = user.filter(item => item.username === username);
    if(item.length > 0){
      if(password === item[0].password){
        Cookie.set("userId", encode(item[0].username), {expires: 3600, path:'/admin'});
        window.location.href = '/admin/dashboard'
      }else{
        setMessage("Username And Password Doesn't Match")
      };
    }else{
      setMessage("Username Doesn't Exist")
    }
  }
  useEffect(()=>{
    if(Cookie.get('userId')){
       let decodedUsername = decode(Cookie.get("userId"));
       let result = data.user.filter(filterItem => filterItem.username.includes(decodedUsername));
       console.log(result.length)
       if(result.length > 0){
         window.location.href='/admin/dashboard';
       }
    }
  },[])
  return (
    <>
      <div className="login__box">
        <h2 className="login__title">Login To Admin Panel</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__item">
            <label htmlFor="username" className="login__label">
              username
            </label>
            <input
              type="username"
              className="login__input"
              required
              minLength="4"
              maxLength="20"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="login__item">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              type="password"
              className="login__input"
              autoComplete={"true"}
              required
              minLength="8"
              maxLength="16"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="login__item">
            <button className="login__btn" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="login__msg">{message}</div>
      </div>
    </>
  );
}

export default Login;
