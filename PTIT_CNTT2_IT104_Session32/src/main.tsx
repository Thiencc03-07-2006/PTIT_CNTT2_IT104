import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store/index.ts";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import { useEffect } from "react";
function Page() {
  const currentUser = useSelector((state: any) => state.auth.user);
  useEffect(() => {
    console.log("Nguoi dung da login: ", currentUser);
  }, [currentUser]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Page />
  </Provider>
);
