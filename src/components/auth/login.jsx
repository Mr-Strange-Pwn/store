import React from "react";
import { Form } from "react-bootstrap";
import { ButtonContainer } from "../button";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { context } from "../../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const value = React.useContext(context);

  const submitHandler = (e) => {
    e.preventDefault();

    let data = { username: username, password: password };
    value.checkAuth(data);
    // axios.post("http://localhost:2000/login", data)
    // .then((result)=>{
    //     alert(result.data)
    // }).catch(err =>{
    //     alert("error in valudation " , err)
    // })
  };

  return (
    <div>
      <Form id="form">
        <h1>
          {" "}
          login to the system{" "}
          <span role="img" aria-label="log">
            🕵️‍♂️
          </span>
        </h1>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. pwn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <ButtonContainer onClick={submitHandler}>Log-in</ButtonContainer>
      </Form>
    </div>
  );
};

export default Login;
