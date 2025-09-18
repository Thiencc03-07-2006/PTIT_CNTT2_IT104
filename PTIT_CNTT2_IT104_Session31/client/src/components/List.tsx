import axios from "axios";
import { useState } from "react";
interface post {
  id: number | string;
  title: string;
  img: string;
  createAt: Date;
  status: boolean;
  content: string;
}
export default function List({
  posts,
  setBlockId,
  setMode,
  setIsOpenModel,
}: {
  posts: post[];
  setBlockId: React.Dispatch<React.SetStateAction<null | number | string>>;
  setMode: React.Dispatch<React.SetStateAction<boolean | number | string>>;
  setIsOpenModel: React.Dispatch<
    React.SetStateAction<boolean | number | string>
  >;
}) {
  const [sort, setSort] = useState<{
    search: string;
    status: "true" | "false" | "";
  }>({
    search: "",
    status: "",
  });
  const deleteItem = async (id: number | string) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
    } catch (error) {
      console.error("Loi khi xoa du lieu: ", error);
    }
  };
  return (
    <div className="flex flex-col gap-[10px] p-[24px]">
      <div className="flex justify-between">
        <div className="flex gap-[10px]">
          <input
            onChange={(e) => setSort({ ...sort, search: e.target.value })}
            className="border-1 border-gray-500 rounded-[10px] p-[5px]"
            type="search"
            placeholder="Nhap tu khoa tim kiem"
          />
          <select
            onChange={(e) => setSort({ ...sort, status: e.target.value })}
            className="border-1 border-gray-500 rounded-[10px] p-[5px]"
            name=""
            id=""
          >
            <option value="">Loc bai viet</option>
            <option value="true">Da xuat ban</option>
            <option value="false">Dung xuat ban</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => setIsOpenModel(true)}
            className="bg-blue-500 text-white p-[5px]"
          >
            Them moi bai viet
          </button>
        </div>
      </div>
      <div>
        <table className="w-[100%] border-collapse border-1 border-gray-500">
          <thead>
            <tr>
              <th className="border-1 border-gray-500">SST</th>
              <th className="border-1 border-gray-500">Tieu de</th>
              <th className="border-1 border-gray-500">Hinh anh</th>
              <th className="border-1 border-gray-500">Ngay viet</th>
              <th className="border-1 border-gray-500">Trang thai</th>
              <th className="border-1 border-gray-500">Chuc nang</th>
            </tr>
          </thead>
          <tbody>
            {posts
              .filter((t) =>
                t.title.toLowerCase().includes(sort.search.trim().toLowerCase())
              )
              .filter(
                (t) => sort.status === "" || String(t.status) === sort.status
              )
              .map((t, index) => (
                <tr key={t.id}>
                  <td className="p-[5px] border-1 border-gray-500 text-center">
                    {index + 1}
                  </td>
                  <td className="p-[5px] border-1 border-gray-500">
                    {t.title}
                  </td>
                  <td className="p-[5px] border-1 border-gray-500">
                    <img
                      className="size-[30px] object-fit:cover rounded-full mx-auto"
                      src={t.img}
                      alt=""
                    />
                  </td>
                  <td className="p-[5px] border-1 border-gray-500">
                    {new Date(t.createAt).toLocaleString()}
                  </td>
                  <td className="p-[5px] border-1 border-gray-500">
                    <div
                      className={`${
                        t.status
                          ? "text-green-500 border-green-500"
                          : "text-red-500 border-red-500"
                      } border-1 rounded-[10px] p-[5px] size-max`}
                    >
                      {t.status ? "Da xuat ban" : "Ngung hoat dong"}
                    </div>
                  </td>
                  <td className="p-[5px] border-gray-500 flex gap-[10px] justify-center">
                    <button
                      onClick={() => setBlockId(t.id)}
                      className="border-1 rounded-[10px] p-[5px] bg-orange-500 text-white"
                    >
                      Chan
                    </button>
                    <button
                      onClick={() => {
                        setMode(t.id);
                        setIsOpenModel(true);
                      }}
                      className="border-1 rounded-[10px] p-[5px] border-oranger-500 text-oranger-500"
                    >
                      Sua
                    </button>
                    <button
                      onClick={() => deleteItem(t.id)}
                      className="border-1 rounded-[10px] p-[5px] border-red-500 text-red-500"
                    >
                      Xoa
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
