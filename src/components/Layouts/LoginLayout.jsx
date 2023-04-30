import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar";

const LoginLayout = () => {
  return (
    <div>
      <Container>
        <NavigationBar></NavigationBar>
        <div>
          <Outlet></Outlet>
        </div>
      </Container>
    </div>
  );
};

export default LoginLayout;
