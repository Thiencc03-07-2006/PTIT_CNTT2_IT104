import { NavLink, Outlet } from "react-router-dom";

export default function NavBar2() {
  return (
    <div>
      <nav className="flex text-center">
        <NavLink
          to="/home2"
          end
          className={({ isActive }) =>
            `${isActive ? "bg-red-500" : ""} flex-1 bg-blue-500 text-white`
          }
        >
          <strong>Home2</strong>
        </NavLink>
        <NavLink
          to="/home2/product3"
          className={({ isActive }) =>
            `${isActive ? "bg-red-500" : ""} flex-1 bg-blue-500 text-white`
          }
        >
          <strong>Product</strong>
        </NavLink>
        <NavLink
          to="/home2/detail"
          className={({ isActive }) =>
            `${isActive ? "bg-red-500" : ""} flex-1 bg-blue-500 text-white`
          }
        >
          <strong>Detail</strong>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
