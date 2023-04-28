import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftNav from "../pages/LeftNav/LeftNav";
import RightNav from "../pages/RightNav/RightNav";
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
        <div className="row">
          <div className="col-2">
            <LeftNav></LeftNav>
          </div>
          <div className="col-7">
            <Outlet></Outlet>
          </div>
          <div className="col-3">
            <RightNav></RightNav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
