import "./style/reset.css";
import Icrease from "./components/Icrease";
import UserList from "./components/UserList";
import LoginForm from "./components/LoginForm";
import ColorPicker from "./components/ColorPicker";
import InputText from "./components/InputText";
import InputRadio from "./components/InputRadio";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <>
      <Icrease />
      <UserList />
      <LoginForm />
      <ColorPicker />
      <InputText />
      <InputRadio />
      <ToDoList />
    </>
  );
}

export default App;
