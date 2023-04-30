import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Form className="w-50 mx-auto my-5 border shadow-lg p-4 rounded-1">
      <h2 className="text-center m-4 ">Login Your Account</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="accept the terms and condition" />
        <Form.Text className="text-muted">
          <span className="text-danger">password does not matched!!</span>
        </Form.Text>
      </Form.Group>
      <Button variant="danger" type="submit">
        Login
      </Button>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-muted">
          <span className="text-muted">
            Don't have an account? <Link to={"/register"}>Register</Link>
          </span>
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default Login;
