import React from "react";

function UserNav({ title }) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between px-5">
        <a class="navbar-brand">{title}</a>
        <form class="form-inline">
          <button class="btn btn-outline-secondary my-2 my-sm-0">Back</button>
        </form>
      </nav>
    </div>
  );
}

export default UserNav;
