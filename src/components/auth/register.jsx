import React from "react";
import validator from "validator";
import { ButtonContainer } from "../button";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { context } from "../../context";

const RegisterForm = () => {
  const value = React.useContext(context);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let data = { username: username, email: email, password: password };
    value.addUsers(data);
    alert(`new user ${username} added`);
    setConformPassword("");
    setEmail("");
    setPassword("");
    setUserName("");
    setErrors([]);
    // axios
    //   .post("http://localhost:2000/user/register", data)
    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.data === "data submited") {
    //       alert("you registered as a user ");
    //       setUserName("");
    //       setEmail("");
    //       setPassword("");
    //       setConformPassword("");
    //     } else {
    //       setErrors(response.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("error : *****", err);
    //     alert("connection error plese try again");
    //   });
  };

  return (
    <div>
      <Form id="form">
        <h1>
          register your self{" "}
          <span role="img" aria-label="leg">
            🤗
          </span>
        </h1>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            placeholder="ex. pwn tiwari"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="off"
          />
          <Form.Text className="text-muted">
            {username === "" ? (
              <p>
                User Name cant be blanke{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>
              </p>
            ) : username.length > 20 ? (
              <p>
                {" "}
                username cannot contain more then 20 characters ‍
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : null}
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
            {validator.isEmail(email) ? (
              <p>
                " valid email formate{" "}
                <span role="img" aria-label="img">
                  ✅
                </span>
                "
              </p>
            ) : (
              <p>
                invalid email formate{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>
              </p>
            )}
            We'll never share your email with anyone else.👮‍♂️
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
            {password.length === 0 ? (
              <p>
                password can not be empty{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : password.length < 8 ? (
              <p>
                password must be 8 character long
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : password.length > 20 ? (
              <p>
                password cannot contain more then 20 characters
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : null}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Conform Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="conform Password"
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
          />
          <Form.Text>
            {password !== conformPassword ? (
              <p>
                password not match{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>
              </p>
            ) : null}
          </Form.Text>
        </Form.Group>

        {errors.length > 0 ? (
          <Alert variant="danger">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </Alert>
        ) : null}

        <ButtonContainer onClick={submitHandler}>
          sign Up / register
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default RegisterForm;
