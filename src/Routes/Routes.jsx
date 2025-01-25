import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Reserve from "../Pages/Reserve";
import Takeaway from "../Pages/Takeaway";
import Order from "../Pages/Order";
import Map from "../Pages/Map";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/reserve',
        element:<Reserve></Reserve>
      },
      {
        path:'/takeaway',
        element:<Takeaway></Takeaway>
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/map',
        element:<Map></Map>
      },
    ]
  },
]);