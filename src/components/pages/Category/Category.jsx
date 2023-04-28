import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../News/NewsCard";

const Category = () => {
  const fetchedData = useLoaderData();
  const { id } = useParams();
  //   console.log(id);

  //   console.log(news);
  return <NewsCard news={fetchedData}></NewsCard>;
};

export default Category;
