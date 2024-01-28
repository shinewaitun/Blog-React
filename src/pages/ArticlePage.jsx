import React from "react";

import svg from "src/assets/svg/Group 10.svg";
import img from "src/assets/images/image 2.png";

import ArticleJumboltron from "src/components/ArticleJumboltron";
import CreatorProfile from "src/components/CreatorProfile";
import ArticleDetails from "src/components/ArticleDetails";
import AboutCreator from "src/components/AboutCreator";
// import SuggestArticles from "src/components/SuggestArticles";
import Signup from "src/components/Signup";
import { getblog } from "../services/blog.service";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { id } = useParams();
  const { data: response, isLoading } = useQuery("key", () => getblog(id));
  let data;
  if (!isLoading) {
    data = response.data.data.content;
    console.log(data.creator);
  }
  return (
    <div>
      {data && (
        <>
          <ArticleJumboltron img={img} />
          <CreatorProfile creator={data.creator} />
          <ArticleDetails />
          <AboutCreator creator={data.creator} />
          <div className="w-100 my-4 border-top border-2 border-black position-relative">
            <img
              className="position-absolute translate-middle start-50"
              src={svg}
              alt="svg"
            />
          </div>
          <h1 className="py-4 text-center text-black">What to read next</h1>
          {/* <SuggestArticles articles={data.articles} /> */}
          <Signup />
        </>
      )}
    </div>
  );
}
