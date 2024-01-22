import React from "react";
import { Outlet } from "react-router";
import NavBar from "src/layouts/UserNav";
import Footer from "src/layouts/Footer";

export default function UserLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
