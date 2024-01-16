import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="d-flex gap-3 w-100 h-100">
      <AdminSidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
