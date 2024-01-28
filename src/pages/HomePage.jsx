import React from "react";
import AllArticles from "src/components/AllArticles";
import ListingJumboltron from "src/components/ListingJumboltron";
import img from "src/assets/images/image 2.png";
import { getblogs } from "../services/blog.service";
import { useQuery } from "react-query";

export default function HomePage() {
  const { data, isLoading, refetch } = useQuery("key", getblogs);
  refetch();
  let blogs;
  if (!isLoading) {
    blogs = data.data.data.content;
  }
  return (
    <div>
      <ListingJumboltron img={img} />
      <h1 className="text-center text-black fw-bold">All Articles</h1>
      <AllArticles articles={blogs} />
    </div>
  );
}
