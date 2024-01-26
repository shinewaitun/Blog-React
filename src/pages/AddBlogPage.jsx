import React from "react";
import UserNav from "../layouts/UserNav";
import AddBlogForm from "../components/AddBlogForm";

function AddBlogPage() {
  return (
    <div>
      <UserNav title={"CREATE CONTENT"} />
      <AddBlogForm/>
    </div>
  );
}

export default AddBlogPage;
