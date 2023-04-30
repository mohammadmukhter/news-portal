import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../components/Layouts/LoginLayout";
import Main from "../components/Layouts/Main";
import NewsLayout from "../components/Layouts/NewsLayout";
import Category from "../components/pages/Category/Category";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
import SingleNews from "../components/pages/News/SingleNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/categories/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
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
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <SingleNews />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "",
        element: <Navigate to={"/categories/0"}></Navigate>,
      },
    ],
  },
]);

export default router;
