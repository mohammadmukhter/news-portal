import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Category from "../components/pages/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Navigate to="/categories/0"></Navigate>,
      },
    ],
  },
  {
    path: "/categories",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);

export default router;
