import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import AllCraft from "../pages/allCraft/AllCraft";
import AddCraft from "../pages/addCraft/AddCraft";
import MyCraft from "../pages/myCraft/MyCraft";

import Error from "../shared/error/Error";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import CraftItemDetail from "../pages/craftItemDetail/CraftItemDetail";
import UpdateMyCraft from "../pages/updateMyCraft/UpdateMyCraft";
import SubCategoriesAllItem from "../pages/subCategoriesAllItem/SubCategoriesAllItem";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/craftItemDetail/:id",
        element: (
          <PrivateRouter>
            <CraftItemDetail></CraftItemDetail>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sculpture-web-proj-server-site.vercel.app/addedSculptures/${params.id}`
          ),
      },
      {
        path: "/subCategoriesAllItem/:CategoryName",
        element: <SubCategoriesAllItem></SubCategoriesAllItem>,
        loader: ({ params }) =>
          fetch(
            `https://sculpture-web-proj-server-site.vercel.app/addedSculptures/category/${params.CategoryName}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft>,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRouter>
            <AddCraft></AddCraft>
          </PrivateRouter>
        ),
      },
      {
        path: "/myCraft",
        element: (
          <PrivateRouter>
            <MyCraft></MyCraft>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateMyCraft/:id",
        element: (
          <PrivateRouter>
            <UpdateMyCraft></UpdateMyCraft>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sculpture-web-proj-server-site.vercel.app/addedSculptures/${params.id}`
          ),
      },
    ],
  },
]);
