import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../EroorPage/ErrorPage";
import Home from "../Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;
