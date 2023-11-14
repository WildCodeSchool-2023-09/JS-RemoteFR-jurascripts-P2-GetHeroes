import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Instruction from "./pages/instruction/Instruction";
import InGame from "./pages/in-game/InGame";
import Colector from "./components/colector/Colector";
import ZoomCard from "./pages/zoom_colector/ZoomColector";
import Reward from "./pages/reward/Reward";
import Errorpage from "./pages/errorpage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/game",
        element: <InGame />,
      },
      {
        path: "/instruction",
        element: <Instruction />,
      },
      {
        path: "/colector",
        element: <Colector />,
      },
      {
        path: "/zoom_colector",
        element: <ZoomCard />,
      },
      {
        path: "/reward",
        element: <Reward />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
