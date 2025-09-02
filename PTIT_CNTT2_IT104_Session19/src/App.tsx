import "./style/reset.css";
import ShoppingCart from "./components/ShoppingCart";
//Bai 2 chua lam
import RenderCounter from "./components/RenderCounter";
import LanguageProvider from "./components/PTIT_CNTT2_IT104_Session19_Bai09/LanguageContext";
import LanguageChange from "./components/PTIT_CNTT2_IT104_Session19_Bai09/LanguageChange";
import List100Item from "./components/List100Item";
function App() {
  return (
    <>
      <ShoppingCart />
      <RenderCounter />
      <LanguageProvider>
        <LanguageChange />
      </LanguageProvider>
      <List100Item />
    </>
  );
}

export default App;
