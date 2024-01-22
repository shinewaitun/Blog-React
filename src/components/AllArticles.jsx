import React from "react";
import BlogCard from "src/components/BlogCard";

export default function AllArticles({ articles }) {
  return (
    <div className="d-flex justify-content-center align-items-center p-4">
      <div className="row w-75">
        {articles.map((article, index) => (
          <div
            key={index}
            className="col-lg-5 col-md-6 col-sm-12 p-3 mb-3 mx-auto"
          >
            <BlogCard img={article.img} title={article.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
