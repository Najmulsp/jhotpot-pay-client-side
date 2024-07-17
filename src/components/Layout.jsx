import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../authintications/Login";
import Home from "./Home";
import Register from "../authintications/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },        
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);
