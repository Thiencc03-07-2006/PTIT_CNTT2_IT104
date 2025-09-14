import { Link } from "react-router-dom";
import { listPost } from "../../components/PostData";
export default function Posts() {
  return (
    <div className="flex flex-col gap-[10px]">
      <h2>
        <strong>Danh sach bai viet</strong>
      </h2>
      {listPost.map((t) => (
        <div
          key={t.id}
          className="border-gray-500 border-[2px] rounter-[10px] p-[5px]"
        >
          <h3 className="text-blue-600">
            <Link to={t.id}>{t.title}</Link>
          </h3>
          <p>{t.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
