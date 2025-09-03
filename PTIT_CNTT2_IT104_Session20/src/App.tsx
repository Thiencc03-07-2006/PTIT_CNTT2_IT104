import "./style/reset.css";
import PTIT_CNTT2_IT104_Session20_Bai01 from "./components/PTIT_CNTT2_IT104_Session20_Bai01";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import PageTitle from "./components/PageTitle";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
function App() {
  return (
    <>
      <PTIT_CNTT2_IT104_Session20_Bai01 />
      <UserProfile />
      <Welcome />
      <PageTitle />
      <Timer />
      <Modal />
      <Counter />
      <UserForm />
    </>
  );
}

export default App;
