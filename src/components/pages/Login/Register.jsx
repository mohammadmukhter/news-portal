import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Form className="w-50 mx-auto my-5 border shadow-lg p-4 rounded-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name </Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL </Form.Label>
        <Form.Control type="text" placeholder="Enter your Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address </Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        <Form.Text className="text-danger">
          password does not matched!
        </Form.Text>
      </Form.Group>
      <Button variant="success" type="submit">
        Register
      </Button>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-muted">
          <span className="text-muted">
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default Register;
