import React from "react";
import UserNav from "../layouts/UserNav";
import UpdateBlogForm from "../components/UpdateBlogForm";

function UpdateBlogPage() {
  return (
    <div>
      <UserNav title={"UPDATE CONTENT"} />
      <UpdateBlogForm/>
    </div>
  );
}

export default UpdateBlogPage;
