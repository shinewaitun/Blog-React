import React from "react";
import Table from "../components/Table";
import AdminNav from "../layouts/AdminNav";

function BlogList() {
  const modalOptions = {
    firstBtnColor: "btn-primary",
    firstBtnName: "Approve",
    secondBtnColor: "btn-danger",
    secondBtnName: "Reject",
  };
  return (
    <div>
      <AdminNav title={"Blog List"} />
      <Table options={modalOptions} />
    </div>
  );
}

export default BlogList;
