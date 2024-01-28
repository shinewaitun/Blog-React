import React from "react";
import BlogCard from "src/components/BlogCard";
import { useNavigate } from "react-router-dom";

export default function AllArticles({ articles }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center p-4">
      {
        articles && <div className="row w-75">
        {articles.blogs && articles.blogs.map((article, index) => (
          <div
            key={index}
            className="col-lg-5 col-md-6 col-sm-12 p-3 mb-3 mx-auto"
            onClick={() => {
              navigate(`/article/${article._id}`);
            }}
          >
            <BlogCard img={article.urlList[0]} title={article.title} />
          </div>
        ))}
      </div>
      }
    </div>
  );
}
