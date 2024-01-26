import React from "react";
import UserNav from "../layouts/UserNav";
import AddBlogForm from "../components/AddBlogForm";
import { getcategories } from "../services/category.services";
import { useQuery } from "react-query";

function AddBlogPage() {
  const { data, isLoading, isError, refetch } = useQuery(
    ["key"],
    getcategories
  );
  let selectoptions;
  if (!isLoading) {
    selectoptions = data.data.data.content;
  }
  return (
    <div>
      <UserNav title={"CREATE CONTENT"} />
      <AddBlogForm selectoptions={selectoptions && selectoptions} />
    </div>
  );
}

export default AddBlogPage;
