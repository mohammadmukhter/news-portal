import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="row">
        <div className="col-4"></div>
        <Nav className="col-4 me-auto d-flex gap-3 text-center justify-content-center align-items-center">
          <Link className=" text-decoration-none" to="/">
            Home
          </Link>
          <Link className=" text-decoration-none" to="">
            About
          </Link>
          <Link className=" text-decoration-none" to="">
            News
          </Link>
          <Link className=" text-decoration-none" to="">
            Contact
          </Link>
          <Link className=" text-decoration-none" to="">
            Career
          </Link>
        </Nav>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Link>
            <FaUserCircle className="fs-4 text-dark" />
          </Link>
          <Link to="/login" className="btn btn-dark ms-2">
            Login
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
