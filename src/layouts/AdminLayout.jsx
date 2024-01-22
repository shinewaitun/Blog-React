import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="d-flex gap-0 w-100 h-100">
      <AdminSidebar />
      <div className="w-75">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
