import React from "react";
import UserNav from "../layouts/UserNav";
import BlogForm from "../components/BlogForm";

const formType = {
  type: "Update",
  btnColor: "btn-warning text-white",
};

function UpdateBlogPage() {
  return (
    <div>
      <UserNav title={"UPDATE CONTENT"} />
      <BlogForm form={formType} />
    </div>
  );
}

export default UpdateBlogPage;
