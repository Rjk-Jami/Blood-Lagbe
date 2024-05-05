import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Navbar from "../pages/shared/Navbar/Navbar";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import AboutTeam from "../pages/AboutTeam/AboutTeam";
import Contact from "../pages/Contact/Contact";
import OptionForHome from "../pages/OptionForHome/OptionForHome";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Verify from "../pages/Login/Verify/Verify";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "aboutUs",
          element: <AboutUs></AboutUs>
        },
        {
          path: "aboutTeam",
          element: <AboutTeam></AboutTeam>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "OptionForHome",
          element: <OptionForHome></OptionForHome>
        },
        
      ],
    },
    {
      path: "login",
      element: <LoginLayout />,
      // errorElement: <ErrorPage />,
      children: [
        
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "verify/:id",
          element: <Verify></Verify>
        },
        // {
        //   path: "aboutTeam",
        //   element: <AboutTeam></AboutTeam>
        // },
        
        
      ],
    },

    

  ]);