import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "src/layouts/Layout";
import AdminLayout from "src/layouts/AdminLayout";
import HomePage from "src/pages/HomePage";
import ArticlePage from "src/pages/ArticlePage";
import LoginPage from "src/pages/LoginPage";
import SignupPage from "src/pages/SignupPage";
import Dashboard from "src/pages/DashboardPage";
import BlogListPage from "src/pages/BlogListPage";
import UserListPage from "src/pages/UserListPage";
import ProfilePage from "src/pages/ProfilePage";

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
        {
          path: "/profile",
          element: <ProfilePage />,
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
