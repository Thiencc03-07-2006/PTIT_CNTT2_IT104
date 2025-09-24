import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { changeLanguage } from "./languageSlice";

export default function Language() {
  const language = useSelector((state: RootState) => state.language.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 6</h3>
      <select
        onChange={(e) => dispatch(changeLanguage(e.target.value))}
        name=""
        id=""
      >
        <option value="vi">Vietnamise</option>
        <option value="en">English</option>
      </select>
      <p>{language === "en" ? "Rikkei Academy" : "Hoc vien Rikkei"}</p>
    </div>
  );
}
