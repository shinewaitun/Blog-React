import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "src/pages/HomePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
