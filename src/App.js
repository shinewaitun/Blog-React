import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Layout from "src/layouts/Layout"
import HomePage from "src/pages/HomePage"
import ArticlePage from "src/pages/ArticlePage"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/article",
          element: <ArticlePage/>
        }
      ]
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
