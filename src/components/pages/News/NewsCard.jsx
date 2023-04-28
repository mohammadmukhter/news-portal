import React from "react";
import { Button, Card } from "react-bootstrap";

const NewsCard = ({ news }) => {
  return (
    <div className="my-4">
      <h2>News Portal</h2>
      {news.map((data) => {
        const { title, image_url, _id, details, author, category_id, rating } =
          data;
        return (
          <Card className=" mb-4" key={_id}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Img variant="top" src={image_url} />
              <Card.Text>{details}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default NewsCard;
