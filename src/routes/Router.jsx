import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import AllCraft from "../pages/allCraft/AllCraft";
import AddCraft from "../pages/addCraft/AddCraft";
import MyCraft from "../pages/myCraft/MyCraft";
import BookTicket from "../pages/bookTicket/BookTicket";
import Error from "../shared/error/Error";
import Register from "../pages/register/Register";

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
        path: "/allCraft",
        element: <AllCraft></AllCraft>,
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/myCraft",
        element: <MyCraft></MyCraft>,
      },
      {
        path: "/bookTicket",
        element: <BookTicket></BookTicket>,
      },
    ],
  },
]);
