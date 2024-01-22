import React from "react";
import UserNav from "../layouts/UserNav";
import BlogForm from "../components/BlogForm";

const formType = {
  type: "Save",
  btnColor: "btn-primary",
};

function AddBlogPage() {
  return (
    <div>
      <UserNav title={"CREATE CONTENT"} />
      <BlogForm form={formType} />
    </div>
  );
}

export default AddBlogPage;
