import AdminSidebar from "./AdminSidebar";
import AdminNav from "./AdminNav";
import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="d-flex gap-0 w-100 h-100">
      <AdminSidebar />
      <div className="d-flex flex-column w-75">
        <AdminNav />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
