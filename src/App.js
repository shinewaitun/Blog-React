import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "src/layouts/Layout";
import HomePage from "src/pages/HomePage";
import ArticlePage from "src/pages/ArticlePage";
import LoginPage from "src/pages/LoginPage";
import SignupPage from "src/pages/SignupPage";

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
        }
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
