import React from "react";
import AdminNav from "../layouts/AdminNav";
import Table from "../components/CategoryTable";

const modalOptions = {
  firstBtnColor: "btn-primary",
  firstBtnName: "Approve",
  secondBtnColor: "btn-danger",
  secondBtnName: "Reject",
};

function ManagementPage() {
  return (
    <div>
      <AdminNav title={"Management"} />
      <Table options={modalOptions} />
    </div>
  );
}

export default ManagementPage;
