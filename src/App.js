import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "src/layouts/Layout";
import AdminLayout from "src/layouts/AdminLayout";
import UserLayout from "src/layouts/UserLayout";
import HomePage from "src/pages/HomePage";
import ArticlePage from "src/pages/ArticlePage";
import LoginPage from "src/pages/LoginPage";
import SignupPage from "src/pages/SignupPage";
import Dashboard from "src/pages/DashboardPage";
import BlogListPage from "src/pages/BlogListPage";
import UserListPage from "src/pages/UserListPage";
import ProfilePage from "src/pages/ProfilePage";
import AddBlogPage from "src/pages/AddBlogPage";
import UpdateBlogPage from "src/pages/UpdateBlogPage";
import BlogInfoPage from "src/pages/BlogInfoPage";
import CategoryPage from "src/pages/CategoryListPage";
import BlockListPage from "src/pages/BlockedListPage";
import ManagementPage from "src/pages/ManagementPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/article",
          element: <ArticlePage />,
        },
      ],
    },
    {
      path: "/user",
      element: <UserLayout />,
      children: [
        {
          path: "/user/profile",
          element: <ProfilePage />,
        },
        {
          path: "/user/add_blog",
          element: <AddBlogPage />,
        },
        {
          path: "/user/update_blog",
          element: <UpdateBlogPage />,
        },
        {
          path: "/user/blog_info",
          element: <BlogInfoPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/blog_list",
          element: <BlogListPage />,
        },
        {
          path: "/admin/user_list",
          element: <UserListPage />,
        },
        {
          path: "/admin/block_list",
          element: <BlockListPage />,
        },
        {
          path: "/admin/category_list",
          element: <CategoryPage />,
        },
        {
          path: "/admin/management",
          element: <ManagementPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
