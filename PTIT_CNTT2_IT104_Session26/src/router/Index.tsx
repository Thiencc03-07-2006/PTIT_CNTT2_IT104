import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, useState } from "react";
import ProductDetail from "../pages/ProductDetail";
//2+3+4
import Student from "../pages/Student";
import PrivateRouter from "../pages/PrivateRouter";
import Login from "../pages/Login";
import Account from "../pages/Account";
import Team from "../pages/Team";
import Teams from "../pages/Teams";
import TeamsIndex from "../pages/TeamsIndex";
const LazyLoadComp = React.lazy(() => import("../pages/LazyLoadComp"));
export default function Index() {
  const [isAuth, setIsAuth] = useState(false);
  const router = createBrowserRouter([
    { path: "/*", element: <h1>404</h1> },
    { path: "product/:id", element: <ProductDetail /> },
    { path: "student", element: <Student /> },
    { path: "login", element: <Login onLogin={() => setIsAuth(true)} /> },
    {
      path: "account",
      element: (
        <PrivateRouter isAuth={isAuth}>
          <Account onLogout={() => setIsAuth(false)} />
        </PrivateRouter>
      ),
    },
    {
      path: "teams",
      element: <Teams />,
      children: [
        { index: true, element: <TeamsIndex /> },
        { path: ":teamId", element: <Team /> },
      ],
    },
    {
      path: "/lazyLoadComp",
      element: (
        <Suspense
          fallback={
            <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfvvDM25R68MFs_7Mv419O29Z35tEZGO8JVQc-XDktnhTiRJ_ZseFjFwrHDctiDbDNJ622fgZ19dM9RHAwhIg6VYi43CiJ3WM9g_wHT6at9q1dC3e6YhOfxt3dfszl1xBQwrZiLCvBUHx02YbOm30U?key=dqJir1uzRTqYQ9SisT8b0w"></img>
          }
        >
          <LazyLoadComp />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
