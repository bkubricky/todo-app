// main.jsx
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MyList from "./components/MyList";
import About from "./components/About";
import MeetTheDeveloper from "./components/MeetTheDeveloper";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ⬅️ Layout with NavBar & Footer
    children: [
      { index: true, element: <MyList /> }, // "/" route
      { path: "about", element: <About /> },
      { path: "meet-the-team", element: <MeetTheDeveloper /> },
      { path: "*", element: <h1>404 - Not Found</h1> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
