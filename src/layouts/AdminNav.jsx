import React from "react";

function AdminNav({ title }) {
  return (
    <div className="w-100 navbar navbar-light bg-light">
      <div className="navbar-brand fw-bolder p-3">{title}</div>
    </div>
  );
}

export default AdminNav;
