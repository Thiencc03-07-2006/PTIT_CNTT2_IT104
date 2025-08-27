import "./style/reset.css";
import PTIT_CNTT2_IT104_Session17_Bai01 from "./components/PTIT_CNTT2_IT104_Session17_Bai01";
import PTIT_CNTT2_IT104_Session17_Bai02 from "./components/PTIT_CNTT2_IT104_Session17_Bai02";
import ChangeColor from "./components/ChangeColor";
import Toggle from "./components/Toggle";
import Form from "./components/Form";
import CounText from "./components/CounText";
import Select from "./components/Select";
import CheckBox from "./components/CheckBox";
function App() {
  return (
    <>
      <PTIT_CNTT2_IT104_Session17_Bai01 />
      <PTIT_CNTT2_IT104_Session17_Bai02 />
      <ChangeColor />
      <Toggle />
      <Form />
      <CounText />
      <Select />
      <CheckBox />
    </>
  );
}

export default App;
