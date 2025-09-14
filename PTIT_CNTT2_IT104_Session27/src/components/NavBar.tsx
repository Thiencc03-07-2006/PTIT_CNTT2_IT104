import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="flex text-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } flex-1 bg-blue-500 text-white`
          }
        >
          <strong>Home</strong>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } flex-1 bg-blue-500 text-white`
          }
        >
          <strong>About</strong>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } flex-1 bg-blue-500 text-white`
          }
        >
          <strong>Contact</strong>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
