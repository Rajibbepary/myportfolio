
import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Project from "../pages/Project/Project";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'project',
          element:<Project/>
        }
      ]
    },
  ]);