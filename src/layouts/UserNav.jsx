import React from "react";
import { useNavigate } from "react-router";

function UserNav({ title }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between px-5">
        <a class="navbar-brand">{title}</a>
        <form class="form-inline">
          <button
            class="btn btn-outline-secondary my-2 my-sm-0"
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </form>
      </nav>
    </div>
  );
}

export default UserNav;
