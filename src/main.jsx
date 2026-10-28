import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Hero from "./components/Hero.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import Forgot from "./Pages/Forgot.jsx";

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
      ],
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
  ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
);
