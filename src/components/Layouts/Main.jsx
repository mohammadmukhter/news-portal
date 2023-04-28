import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import MarqueeSection from "../pages/Shared/MarqueeSection";
import NavigationBar from "../pages/Shared/NavigationBar";

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <MarqueeSection></MarqueeSection>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default Main;
