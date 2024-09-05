import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Login } from "./pages/Login.tsx";
import { Home } from "./pages/Home.tsx";
import { PartnerRegister } from "./pages/PartnerRegister.tsx";
import { NotFound } from "./pages/NotFound.tsx";

import "react-toastify/dist/ReactToastify.min.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/parceiro",
    element: <PartnerRegister />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>

    <ToastContainer />
  </>
);
