import { useDispatch } from "react-redux";

export default function ProductItem({
  item,
}: {
  item: {
    id: number | string;
    img: string;
    title: string;
    describe: string;
    quantity: number;
    price: number;
  };
}) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-[10px]">
      <div>
        <img className="size-[100px] object-cover" src={item.img} alt="" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.describe}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div
          className={`${
            item.quantity <= 0 ? "" : "border"
          } p-[5px] border-black text-center`}
        >
          {item.quantity <= 0 ? "" : item.quantity}
        </div>
        <div
          onClick={() => dispatch({ type: "add", payload: item })}
          className={`${
            item.quantity <= 0 ? "bg-gray-500" : "bg-orange-500"
          } text-white p-[5px]`}
        >
          {item.price.toLocaleString("vi-VN") + " USD"}
        </div>
      </div>
    </div>
  );
}
