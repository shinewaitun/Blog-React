import React from "react";
import UserNav from "../layouts/UserNav";
import BlogInfo from "../components/BlogInfo";

function BlogInfoPage() {
  return (
    <div>
      <UserNav title={"BLOG"} />
      <BlogInfo />
    </div>
  );
}

export default BlogInfoPage;
