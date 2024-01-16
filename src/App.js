import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "src/layouts/Layout";
import AdminLayout from "src/layouts/AdminLayout";
import HomePage from "src/pages/HomePage";
import ArticlePage from "src/pages/ArticlePage";
import LoginPage from "src/pages/LoginPage";
import SignupPage from "src/pages/SignupPage";
import Dashboard from "src/pages/DashboardPage";

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
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
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
