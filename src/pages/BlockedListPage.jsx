import React from "react";
import AdminNav from "../layouts/AdminNav";
import Table from "../components/CategoryTable";

const modalOptions = {
  firstBtnColor: "btn-primary",
  firstBtnName: "Approve",
  secondBtnColor: "btn-danger",
  secondBtnName: "Reject",
};

function BlockedListPage() {
  return (
    <div>
      <AdminNav title={"Blocked User List"} />
      <Table options={modalOptions} />
    </div>
  );
}

export default BlockedListPage;
