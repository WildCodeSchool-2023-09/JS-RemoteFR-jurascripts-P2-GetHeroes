import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Instruction from "./pages/instruction/Instruction";
import EnJeux from "./pages/en_jeux/EnJeux";
import Colector from "./components/colector/Colector";
import ZoomCarte from "./pages/zoom_collection/ZoomCollection";
import Recompense from "./pages/recompense/Recompense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/jeux",
        element: <EnJeux />,
      },
      {
        path: "/instruction",
        element: <Instruction />,
      },
      {
        path: "/collection",
        element: <Colector />,
      },
      {
        path: "/zoom_collection",
        element: <ZoomCarte />,
      },
      {
        path: "/recompense",
        element: <Recompense />,
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
