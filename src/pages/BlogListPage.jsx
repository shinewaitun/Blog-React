import React from "react";
import Table from "../components/Table";
import AdminNav from "../layouts/AdminNav";

function BlogList() {
  return (
    <div>
      <AdminNav title={"Blog List"} />
      <Table />
    </div>
  );
}

export default BlogList;
