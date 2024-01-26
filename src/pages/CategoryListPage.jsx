import React from "react";
import Table from "../components/Table";
import AdminNav from "../layouts/AdminNav";
import { getcategories } from "../services/category.services";
import { useQuery } from "react-query";

const modalOptions = {
  firstBtnColor: "btn-primary",
  firstBtnName: "Approve",
  secondBtnColor: "btn-danger",
  secondBtnName: "Reject",
  isCategoryForm: true,
};

const headers = ["Name", "Creator", "Updater", "CreatedAt", "UpdatedAt", " "];

function CategoryListPage() {
  const { data, isLoading } = useQuery(["key"], getcategories);
  let categories;
  if (!isLoading) {
    categories = data.data.data.content;
  }
  return (
    <div>
      <AdminNav title={"Category"} />
      <Table options={modalOptions} data={categories} headers={headers} />
    </div>
  );
}

export default CategoryListPage;
