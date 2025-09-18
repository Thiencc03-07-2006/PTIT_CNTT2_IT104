import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManagerPost from "./components/ManagerPost.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        { path: "list-post", element: <ManagerPost /> },
        {
          path: "*",
          element: (
            <div>
              <p>Vui long truy cap list-post</p>
            </div>
          ),
        },
      ])}
    />
    ;
  </StrictMode>
);
