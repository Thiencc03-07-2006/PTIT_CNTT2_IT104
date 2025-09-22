import { useDispatch } from "react-redux";

export default function CartItem({
  item,
  stt,
}: {
  item: {
    id: number | string;
    img: string;
    title: string;
    describe: string;
    quantity: number;
    price: number;
    cartQuantity: number;
  };
  stt: number;
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (confirm("Ban co muon xoa khong?")) {
      dispatch({ type: "delete", payload: item.id });
    }
  };
  return (
    <tr className="border-b border-gray-500">
      <td className="p-[5px]">{stt}</td>
      <td className="p-[5px]">{item.title}</td>
      <td className="p-[5px]">{item.price.toLocaleString("vi-VN") + " USD"}</td>
      <td className="p-[5px]">
        <div className="border border-black">{item.cartQuantity}</div>
      </td>
      <td className="p-[5px]">
        <button className="rounded-[5px] p-[5px] text-white bg-blue-500">
          Update
        </button>
        <button
          onClick={handleDelete}
          className="rounded-[5px] p-[5px] text-white bg-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
