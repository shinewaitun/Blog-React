import React from "react";
import Table from "../components/CategoryTable";
import AdminNav from "../layouts/AdminNav";
import { getcategories } from "../services/category.services";
import { useQuery } from "react-query";

function CategoryListPage() {
  const { data, isLoading, isError, refetch } = useQuery(
    ["key"],
    getcategories
  );
  let categories;
  if (!isLoading) {
    categories = data.data.data.content;
  }
  return (
    <div>
      <AdminNav title={"Category"} />
      <Table data={categories} refetch={refetch} />
    </div>
  );
}

export default CategoryListPage;
