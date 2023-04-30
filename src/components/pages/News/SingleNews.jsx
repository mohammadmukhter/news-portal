import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const SingleNews = () => {
  //   const id = useParams();
  const loadedData = useLoaderData();
  console.log(loadedData);
  const { title, image_url, _id, details, category_id } = loadedData;

  return (
    <Card className="my-5">
      <Card.Img className="p-2" variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/categories/${category_id}`}>
          <Button variant="danger">
            <FaArrowLeft className="me-2" />
            All News in this Category
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleNews;
