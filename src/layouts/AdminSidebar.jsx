import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="d-flex flex-column justify-content-start w-auto min-vh-100 border shadow p-2 pt-3 position-relative">
      <div className="mb-4">
        <h5 className="text-primary">Blog Logo</h5>
      </div>
      <div className="d-flex flex-column gap-3 pe-5 mb-5">
        <button
          onClick={() => {
            navigate("/admin");
          }}
          className={`d-flex flex-row justify-content-start align-items-center gap-3 btn btn-outline-primary btn-sm border-0 rounded-0 px-4 ${
            location.pathname === "/admin" ? "active" : ""
          }`}
        >
          <span>
            <Icon icon="mdi:view-dashboard" fontSize={20} />
          </span>
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => {
            navigate("/admin/blog_list");
          }}
          className={`d-flex flex-row justify-content-start align-items-center gap-3 btn btn-outline-primary btn-sm border-0 rounded-0 px-4 ${
            location.pathname === "/admin/blog_list" ? "active" : ""
          }`}
        >
          <span>
            <Icon icon="mdi:clipboard-text-multiple" fontSize={20} />
          </span>
          <span>Blog List</span>
        </button>
        <button
          onClick={() => {
            navigate("/admin/user_list");
          }}
          className={`d-flex flex-row justify-content-start align-items-center gap-3 btn btn-outline-primary btn-sm border-0 rounded-0 px-4 ${
            location.pathname === "/admin/user_list" ? "active" : ""
          }`}
        >
          <span>
            <Icon icon="mdi:account-group" fontSize={20} />
          </span>
          <span>User List</span>
        </button>
        <button
          className={`d-flex flex-row justify-content-start align-items-center gap-3 btn btn-outline-primary btn-sm border-0 rounded-0 px-4 ${
            location.pathname === "/admin/management" ? "active" : ""
          }`}
        >
          <span>
            <Icon icon="mdi:folder-account" fontSize={20} />
          </span>
          <span>Admin Management</span>
        </button>
        <button
          className={`d-flex flex-row justify-content-start align-items-center gap-3 btn btn-outline-primary btn-sm border-0 rounded-0 px-4 ${
            location.pathname === "/admin/category" ? "active" : ""
          }`}
        >
          <span>
            <Icon icon="mdi:widgets" fontSize={20} />
          </span>
          <span>Category</span>
        </button>
        <button
          className={`d-flex flex-row justify-content-start align-items-center gap-3 btn btn-outline-primary btn-sm border-0 rounded-0 px-4 ${
            location.pathname === "/admin/block_list" ? "active" : ""
          }`}
        >
          <span>
            <Icon icon="mdi:account-cancel" fontSize={20} />
          </span>
          <span>Block List</span>
        </button>
        <button className="d-flex flex-row justify-content-start align-items-center gap-3 btn btn-outline-primary btn-sm border-0 rounded-0 px-4">
          <span>
            <Icon icon="mdi:logout" fontSize={20} />
          </span>
          <span>Logout</span>
        </button>
      </div>
      <div className="border shadow rounded-2 d-flex flex-row justify-content-center gap-4 py-1 px-2 mb-3 position-absolute bottom-0">
        <div>
          <img
            width={60}
            height={60}
            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
            alt="user"
          />
        </div>
        <div className="d-flex flex-row gap-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span className="fw-bold">Aung Aung</span>
            <span className="text-secondary text-opacity-75">Admin</span>
          </div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <button className="btn border-0">
              <Icon
                icon="mdi:arrow-down-drop-circle"
                fontSize={20}
                color="blue"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
