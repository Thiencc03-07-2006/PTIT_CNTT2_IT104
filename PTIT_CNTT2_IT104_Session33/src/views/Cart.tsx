import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
export default function Cart() {
  const [displayMess, setDisplayMess] = useState(false);
  const product = useSelector((state: any) => state.carts);
  const statusAction = useSelector((state: string) => state.status);
  const dispatch = useDispatch();
  useEffect(() => {
    setDisplayMess(true);
    setTimeout(() => {
      setDisplayMess(false);
      dispatch({ type: "reset" });
    }, 1500);
  }, [statusAction]);
  return (
    <div className="flex-1">
      <div className="border border-blue-500  rounded-[10px]">
        <h2 className="bg-blue-500 p-[10px] text-white rounded-t-[10px]">
          List Products
        </h2>
        <div className="p-[10px]">
          <table className="w-[100%]">
            <thead>
              <tr>
                <td>STT</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {product.map((t, i) => (
                <CartItem key={t.id} item={t} stt={i + 1} />
              ))}
            </tbody>
          </table>
          <div>
            {product.length > 0 ? (
              <div className="flex justify-between">
                <span>
                  There are <strong>{product.length}</strong> items in your cart
                </span>
                <strong className="text-red-500">
                  {product
                    .reduce((a, b) => a + b.cartQuantity * b.price, 0)
                    .toLocaleString("vi-Vn")}{" "}
                  USD
                </strong>
              </div>
            ) : (
              "Empty product in your cart"
            )}
          </div>
        </div>
        {displayMess && (
          <div
            className={`rounded-[10px] ${
              statusAction === "add"
                ? "bg-green-500 h-[100px] p-[10px]"
                : statusAction === "delete"
                ? "bg-red-500 h-[100px] p-[10px]"
                : statusAction === "update"
                ? "bg-orange-500 h-[100px] p-[10px]"
                : ""
            }`}
          >
            {statusAction === "add"
              ? "Add to cart successfully"
              : statusAction === "delete"
              ? "Delete cart successfully"
              : statusAction === "delete"
              ? "Update cart successfully"
              : ""}
          </div>
        )}
      </div>
    </div>
  );
}
