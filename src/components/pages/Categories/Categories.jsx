import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:5000/categories")
      ).json();

      // set state when the data received
      setCategories(data);
    };
    dataFetch();
  }, []);
  console.log(categories);

  return (
    <div className="my-4">
      <h6>All Category</h6>
      <ListGroup variant="flush">
        {categories.map((data) => (
          <Link
            className="text-decoration-none text-secondary ps-2 mb-3"
            key={data.id}
          >
            {data.name}
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default Categories;
