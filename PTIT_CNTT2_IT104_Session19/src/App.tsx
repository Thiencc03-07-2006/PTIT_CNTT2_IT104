import "./style/reset.css";
import ShoppingCart from "./components/ShoppingCart";
//Bai 2 chua lam
import RenderCounter from "./components/RenderCounter";
import List100Item from "./components/List100Item";
function App() {
  return (
    <>
      <ShoppingCart />
      <RenderCounter />
      <List100Item />
    </>
  );
}

export default App;
