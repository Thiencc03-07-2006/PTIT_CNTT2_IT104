import { NavLink, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[15vw] bg-blue-600 p-[10px] flex flex-col justify-between h-[100%]">
        <div className="flex flex-col gap-[10px]">
          <h1>📝 My blog</h1>
          <nav className="w-[100%]">
            <NavLink
              to="/blog/posts"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-[#6d60ec]" : ""
                } rounded-[10px] text-white p-[5px] w-[100%] block`
              }
            >
              <strong>Posts</strong>
            </NavLink>
          </nav>
        </div>
        <div className="border-gray-300 border-t-[2px]">2025 My Blog</div>
      </div>
      <div className="flex flex-1 flex-col gap-[5px] p-[10px]">
        <Outlet />
      </div>
    </div>
  );
}
