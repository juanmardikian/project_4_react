import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import {loginUser } from '../api-helper'
import { Redirect } from 'react-router-dom'

export default function Welcome() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });


const [logged, setLogged] = useState (

  localStorage.getItem('authToken')

)

  const handleFormChange = e => {
    const { name, value } = e.target;

    setFormValue(preState => ({
      ...preState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await loginUser(formValue); //// going in the api file and login in
   console.log(res)
   setLogged(localStorage.getItem('authToken'))
  };

  if (localStorage.getItem('authToken')) {
    return <Redirect to="/User" />;
  }

  return (
    <div className="welcome">
      <Header />

      <h1 style={{ margin: "2vw" }}>Welcome</h1>
      <h2 style={{ margin: "2vw" }}>Please Log into your account</h2>

      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <div>
          <input type='email' className="logIn" placeholder="e-mail" value={formValue.email} name='email'></input>
        </div>

        <div>
          <input type='password' className="logIn" placeholder="password" value={formValue.password} name="password"></input>
        </div>
        <div>
          <button className="Submit">Submit</button>
        </div>
        <div>Or</div>
        <div>
          for new customers <a href="/SignUp"> Sign Up</a>
        </div>
      </form>
    </div>
  );
}
