import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import AllCraft from "../pages/allCraft/AllCraft";
import AddCraft from "../pages/addCraft/AddCraft";
import MyCraft from "../pages/myCraft/MyCraft";
import BookTicket from "../pages/bookTicket/BookTicket";
import Error from "../shared/error/Error";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";

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
        path: "/bookTicket",
        element: <BookTicket></BookTicket>,
      },
    ],
  },
]);
