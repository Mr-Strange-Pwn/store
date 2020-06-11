import React from "react";
import axios from "axios";
import validator from "validator";
import { ButtonContainer } from "./button";
import { useState } from "react";
import { Form } from "react-bootstrap";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let data = { username: username, email: email, password };
    axios
      .post("http://localhost:2000/user/register", data)
      .then((response) => {
        console.log(response);
        alert("you registered as a user ")
        setUserName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log("error : *****", err);
        alert("connection error plese try again");
      });
  };

  return (
      <div>
        <Form>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              placeholder="ex. pwn tiwari"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Text className="text-muted">
              {
                ( 
                    ( username === "" ? <p>User Name cant be blanke </p> : username.length > 20 ? (
                        <p >
                          {" "}
                          username cannot contain more then 20 characters{" "}
                        </p>
                      ) : null )
                )
              }
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
                {
                    validator.isEmail(email) ? <p>" valid email formate "</p>  : <p>" invalid email formate "</p>
                }
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              {
                (password === "" ? (
                  <p>you must provide a password </p>
                ) : null,
                password.length > 0 && password.length < 8 ? (
                  <p>
                    psaaword must be 8 character long{" "}
                  </p>
                ) : null,
                password.length > 20 ? (
                  <p>
                    password cannot contain more then 20 characters{" "}
                  </p>
                ) : null)
              }
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Conform Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={conformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
            />
            <Form.Text>
              {password !== conformPassword ? (
                <p>password not match</p>
              ) : null}
            </Form.Text>
          </Form.Group>

          <ButtonContainer onClick={submitHandler}>
            sign Up / register
          </ButtonContainer>
        </Form>
      </div>
  );
};

export default RegisterForm;
