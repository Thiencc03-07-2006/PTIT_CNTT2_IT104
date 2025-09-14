import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NavBar from "../components/NavBar";
import ProductList from "../Pages/ProductList";
import ProductDetail from "../Pages/ProductDetail";
import TaskList from "../Pages/TaskList";
import TaskDetail from "../Pages/TaskDetail";
import ProducList2 from "../Pages/ProducList2";
import BlogLayout from "../Pages/PTIT_CNTT2_IT104_Session27_Bai05/BlogLayout";
import Posts from "../Pages/PTIT_CNTT2_IT104_Session27_Bai05/Posts";
import PostsDetail from "../Pages/PTIT_CNTT2_IT104_Session27_Bai05/PostsDetail";
import NavBar2 from "../components/NavBar2";
import Home2 from "../Pages/PTIT_CNTT2_IT104_Session27_Bai06/Home2";
import Product2 from "../Pages/PTIT_CNTT2_IT104_Session27_Bai06/Product2";
import Detail from "../Pages/PTIT_CNTT2_IT104_Session27_Bai06/Detail";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
export default function Index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "product", element: <ProductList /> },
    { path: "product/:id", element: <ProductDetail /> },
    { path: "task", element: <TaskList /> },
    { path: "task/:id", element: <TaskDetail /> },
    { path: "product2", element: <ProducList2 /> },
    {
      path: "blog",
      element: <BlogLayout />,
      children: [
        { path: "posts", element: <Posts /> },
        { path: "posts/:id", element: <PostsDetail /> },
      ],
    },
    {
      path: "/home2",
      element: <NavBar2 />,
      children: [
        { index: true, element: <Home2 /> },
        { path: "product3", element: <Product2 /> },
        { path: "detail", element: <Detail /> },
      ],
    },
    { path: "*", element: <NotFound /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
  ]);
  return <RouterProvider router={router} />;
}
