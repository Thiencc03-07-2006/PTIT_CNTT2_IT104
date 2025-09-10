import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import routers1 from "./routes/PTIT_CNTT2_IT104_Session23_Bai01";
// import routers3 from "./routes/PTIT_CNTT2_IT104_Session23_Bai03";
// import routers4 from "./routes/PTIT_CNTT2_IT104_Session23_Bai04";
// const router = createBrowserRouter([
//   ...routers1,
//   ...routers3,
//   ...routers4,
//   { path: "*", element: <h1>404-Not Found</h1> },
// ]);
import Register from "./pages/PTIT_CNTT2_IT104_Session23_Bai09/Register";
import Login from "./pages/PTIT_CNTT2_IT104_Session23_Bai09/Login";
const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
