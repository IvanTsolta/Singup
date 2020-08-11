 task/SUP-3-API
import React, { useState,useEffect } from "react";

import React, { useState } from "react";
 master
import "./App.css";
import axios from "axios";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;


  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });


  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default function App(props) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

 task/SUP-3-API
  axios
  .get("http://localhost:3001/posts")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
 
 master

  const handleSubmit = e => {
    e.preventDefault();

    if (formValid({ formErrors, firstName, lastName, email, password })) {
      console.log(`
        --SUBMITTING--
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Password: ${password}
 task/SUP-3-API
      `)
      axios
          .post(`http://localhost:3001/posts`, {firstName, lastName, email,password} )
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });

      `);
 master
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "мінімум 3 символи" : "";
        setFirstName(value);
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "мінімум 3 символи" : "";
        setLastName(value);
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "неправильний email";
        setEmail(value);
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "мінімум 6 символи" : "";
        setPassword(value);
        break;
      default:
        break;
    }

    setFormErrors(formErrors);
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName">Ім*я</label>
            <input
              className={formErrors.firstName.length > 0 ? "error" : null}
              placeholder="Ім*я"
              type="text"
              name="firstName"
              noValidate
              onChange={handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Призвіще</label>
            <input
              className={formErrors.lastName.length > 0 ? "error" : null}
              placeholder="Призвіще"
              type="text"
              name="lastName"
              noValidate
              onChange={handleChange}
            />
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Пароль</label>
            <input
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Пароль"
              type="password"
              name="password"
              noValidate
              onChange={handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="createAccount">
            <button type="submit">Створити акаунт</button>

          </div>
        </form>
      </div>
    </div>
  );
}
