import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import AllCraft from "../pages/home/allCraft/AllCraft";
import AddCraft from "../pages/addCraft/AddCraft";
import MyCraft from "../pages/myCraft/MyCraft";
import BookTicket from "../pages/bookTicket/BookTicket";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
