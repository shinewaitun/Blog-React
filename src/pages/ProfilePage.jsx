import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import Table from "../components/BlogTable";
import UserNav from "../layouts/UserNav";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getblogs } from "../services/blog.service";
import { useQuery } from "react-query";

function ProfilePage() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, isLoading } = useQuery("key", getblogs);
  let blogs;
  if (!isLoading) {
    blogs = data.data.data.content;
  }
  return (
    <div>
      <UserNav title={"PROFILE"} />
      <div className="w-75 mx-auto">
        <ProfileInfo user={userInfo} />
      </div>
      <div className="d-flex justify-content-between px-5">
        <div>
          <h4>Blog List</h4>
        </div>
        <button
          className="btn btn-md btn-warning text-white"
          type="button"
          onClick={() => {
            navigate("/user/add_blog");
          }}
        >
          Create Blog
        </button>
      </div>
      <div className="w-100 px-5 py-3">
        <div className="border rounded-2 shadow">
          <Table data={blogs} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
