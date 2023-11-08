import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Instruction from "./pages/instruction/Instruction";
import EnJeux from "./pages/en_jeux/EnJeux";
import Collection from "./components/collection/Collection";
import ZoomCarte from "./pages/zoom_collection/ZoomCollection";

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
        element: <Collection />,
      },
      {
        path: "/zoom_collection",
        element: <ZoomCarte />,
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
