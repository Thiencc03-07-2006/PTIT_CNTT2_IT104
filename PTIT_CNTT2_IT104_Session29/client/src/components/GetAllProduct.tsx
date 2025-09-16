const getAllProduct = () => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("danh sach san pham: ", data);
    });
};
getAllProduct();
export default function GetAllProduct() {
  return (
    <div>
      <h3>Bai 1+2</h3>
    </div>
  );
}
