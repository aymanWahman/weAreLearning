import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import UncleBya from "./pages/UncleBya";
import UncleAshr from "./pages/UncleAshr";
import UncleIsh from "./pages/UncleIsh";
import UncleRy from "./pages/UncleRy";
import Life from "./pages/Life.js";
import ContectUs from "./pages/ContectUs";
import Letters from "./pages/Letters";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORRY.....</h1>,
  },

  {
    path: "/UncleBya",
    element: <UncleBya />,
  },

  {
    path: "/UncleAshr",
    element: <UncleAshr />,
  },
  {
    path: "/UncleIsh",
    element: <UncleIsh />,
  },
  {
    path: "/UncleRy",
    element: <UncleRy />,
  },
  {
    path: "/Life",
    element: <Life />,
  },
  {
    path: "/ContectUs",
    element: <ContectUs />,
  },
  {
    path: "/Letters",
    element: <Letters />,
  },
  {
    path: "/Hardware",
    element: <Hardware />,
  },
  {
    path: "/Software",
    element: <Software />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

