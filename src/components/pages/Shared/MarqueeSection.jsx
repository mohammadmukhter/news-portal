import React from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="d-flex">
      <Button className="btn btn-danger">Latest</Button>
      <Marquee className="ms-4 text-xl" speed="120">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
