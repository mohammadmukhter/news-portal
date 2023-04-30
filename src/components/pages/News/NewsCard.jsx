import React from "react";
import { Card } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating2 from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="my-4">
      <h2>News Portal</h2>
      {news.map((data) => {
        const {
          title,
          image_url,
          _id,
          details,
          author,
          category_id,
          rating,
          total_view,
        } = data;
        return (
          <Card className=" mb-4" key={_id}>
            <Card.Header>
              <div className="d-flex">
                <div className="d-flex align-items-center flex-grow-1">
                  <div>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                      src={author?.img}
                      alt=""
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0">{author?.name}</h6>
                    <p className="mb-0">{author?.published_date}</p>
                  </div>
                </div>
                <div>
                  <Link className="ms-2">
                    <FaRegBookmark />
                  </Link>
                  <Link className="ms-2">
                    <FaShareAlt />
                  </Link>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Img variant="top" src={image_url} />
              <Card.Text>
                {details.length > 250 ? details.slice(1, 250) : details}...
                <Link to={`/news/${_id}`}>Read More</Link>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <Rating2
                    className="text-warning fs-5 "
                    readonly
                    placeholderRating={rating.number}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar></FaStar>}
                  />
                  <span className="ms-2"> {rating.number}</span>
                </div>
                <div>
                  <span className="me-2">
                    <FaEye />
                  </span>
                  {total_view}
                </div>
              </div>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default NewsCard;
