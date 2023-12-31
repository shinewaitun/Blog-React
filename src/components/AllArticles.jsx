import React from "react";
import BlogCard from "./BlogCard";

export default function AllArticles({ articles }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row w-50 d-flex justify-content-center align-items-center">
        {articles.map((article, index) => (
          <div key={index} className="col-md-6 p-4">
            <BlogCard img={article.img} title={article.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
