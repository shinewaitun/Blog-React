import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import data from "src/data/data.json";
import Table from "../components/Table";
import UserNav from "../layouts/UserNav";
import { useNavigate } from "react-router";

function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div>
      <UserNav title={"PROFILE"} />
      <div className="w-75 mx-auto">
        <ProfileInfo user={data.user} />
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
          <Table />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
