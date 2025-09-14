import React from "react";
import { tasks } from "../components/TastData";
import { Link } from "react-router-dom";
export default function TaskList() {
  return (
    <div className="flex flex-col gap-[10px]">
      <h1>Danh sach cong viec</h1>
      {tasks.map((t) => (
        <div className="border-gray-500 border-[2px] p-[10px]">
          <h3>
            <strong>{t.title}</strong>
          </h3>
          <p>{t.description}</p>
          <Link className="text-blue-600" to={String(t.id)}>
            Xem chi tiet
          </Link>
        </div>
      ))}
    </div>
  );
}
