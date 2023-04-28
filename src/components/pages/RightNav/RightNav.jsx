import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import adImage from "../../../assets/bg.png";
import QZone from "../RightNav/QZone";

const RightNav = () => {
  return (
    <div>
      <div className="my-4">
        <h6>Login with</h6>
        <div className="border p-1 text-center mb-1">
          <Link className="text-decoration-none">
            <FaGoogle className="me-1" />
            Login with google
          </Link>
        </div>
        <div className="border p-1 text-center ">
          <Link className="text-decoration-none text-dark">
            <FaGithub className="me-1" />
            Login with github
          </Link>
        </div>
      </div>

      <div className="my-4">
        <h6>Find us On</h6>
        <Card className="w-100">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FaFacebook className="me-1 text-primary" />
              Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter className="me-1 text-primary" />
              Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <FaInstagram className="me-1 text-primary" />
              Instagram
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <QZone></QZone>

      <div className="my-4">
        <Card className="bg-dark text-white">
          <Card.Img src={adImage} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Create an amazing NewsPaper</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default RightNav;
