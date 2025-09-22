import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
export default function ListProducts() {
  const product = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "get" });
  }, []);
  return (
    <div className="border border-blue-500  rounded-[10px] flex-1">
      <h2 className="bg-blue-500 p-[10px] text-white rounded-t-[10px]">
        List Products
      </h2>
      <div>
        {product.length > 0 ? (
          product.map((t) => <ProductItem key={t.id} item={t} />)
        ) : (
          <p>Empty product</p>
        )}
      </div>
    </div>
  );
}
