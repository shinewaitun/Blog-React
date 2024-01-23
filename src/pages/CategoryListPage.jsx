import React from "react";
import Table from "../components/Table";
import AdminNav from "../layouts/AdminNav";

const modalOptions = {
  firstBtnColor: "btn-primary",
  firstBtnName: "Approve",
  secondBtnColor: "btn-danger",
  secondBtnName: "Reject",
};

function CategoryListPage() {
  return (
    <div>
      <AdminNav title={"Category"} />
      <Table options={modalOptions} />
    </div>
  );
}

export default CategoryListPage;
