import React, { useState, useEffect } from "react";
import Header from "./Header";
import { registerUser } from "../api-helper";
import { Redirect } from "react-router-dom";

export default function SignUp() {
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });
  const [created, setCreated] = useState(false);

  const handleFormChange = e => {
    const { name, value } = e.target;

    setFormValue(preState => ({
      ...preState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await registerUser(formValue); //// going in the api file and create a user
    if (res.status == 201) {
      setCreated(true);
    }
  };

  if (created) {
    return <Redirect to="/" />;
  }

  return (
    <div className="welcome">
      <Header />
      <h2 style={{ fontSize: "3vw", margin: "2vw" }}>
        Please fill out the form
      </h2>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <div>
          <input
            className="logIn"
            placeholder="First Name"
            value={formValue.first_name}
            name="first_name"
          ></input>{" "}
          <input
            className="logIn"
            placeholder="Last Name"
            value={formValue.last_name}
            name="last_name"
          ></input>
        </div>
        <div>
          <input
            className="logIn"
            placeholder="e-mail"
            value={formValue.email}
            name="email"
          ></input>
        </div>
        <div>
          <input
            className="logIn"
            placeholder="password"
            value={formValue.password}
            type='password'
            name="password"
          ></input>
        </div>
        <div>
          <button className="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
