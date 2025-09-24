import {
  UserOutlined,
  ControlOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { changeMode } from "./menuSlice";
export default function Menu() {
  const menuMode = useSelector((state: RootState) => state.menuMode.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 5</h3>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          width: "max-content",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <ControlOutlined />
          {menuMode && "Bang dieu kien"}
        </div>
        <div>
          <UserOutlined />
          {menuMode && "Tai khoan"}
        </div>
        <div>
          <DollarOutlined />
          {menuMode && "Tai san"}
        </div>
        <div>
          <LineChartOutlined />
          {menuMode && "Thong ke"}
        </div>
        <div>
          <FileOutlined />
          {menuMode && "Tai lieu"}
        </div>
        <div onClick={() => dispatch(changeMode())}>
          {menuMode ? (
            <>
              <LeftOutlined /> <span>Thu gon</span>
            </>
          ) : (
            <RightOutlined />
          )}
        </div>
      </div>
    </div>
  );
}
