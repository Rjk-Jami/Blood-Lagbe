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
    

  ]);