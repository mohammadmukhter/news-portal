import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/RightNav/RightNav";
import Header from "../pages/Shared/Header";

const NewsLayout = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <div className="row">
          <div className="col-9">
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

export default NewsLayout;
