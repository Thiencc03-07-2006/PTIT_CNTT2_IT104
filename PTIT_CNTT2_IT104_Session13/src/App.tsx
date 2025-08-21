import "./style/reset.css";
import Exercise01 from "./components/Exercise01";
import Exercise02 from "./components/Exercise02";
import Exercise03 from "./components/Exercise03";
import Parent_Comp from "./components/PTIT_CNTT2_IT104_Session13_Bai04/Parent_Comp";
import ParentComp from "./components/PTIT_CNTT2_IT104_Session13_Bai05/ParentComp";
import ListPost from "./components/PTIT_CNTT2_IT104_Session13_Bai06/ListPost";
import PTIT_CNTT2_IT104_Session13_Bai07 from "./components/PTIT_CNTT2_IT104_Session13_Bai07";
import ToDoList from "./components/PTIT_CNTT2_IT104_Session13_Bai08/ToDolist";
import UpdateState from "./components/PTIT_CNTT2_IT104_Session13_Bai09/UpdateState";
import Input from "./components/PTIT_CNTT2_IT104_Session13_Bai10/Input";
function App() {
  return (
    <>
      <Exercise01 />
      <Exercise02 />
      <Exercise03 />
      <Parent_Comp />
      <ParentComp />
      <ListPost />
      <PTIT_CNTT2_IT104_Session13_Bai07 />
      <ToDoList />
      <UpdateState />
      <Input />
    </>
  );
}

export default App;
