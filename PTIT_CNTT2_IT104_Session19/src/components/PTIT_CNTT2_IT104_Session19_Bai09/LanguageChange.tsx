import { useContext } from "react";
import { LanguageProvider } from "./LanguageContext";

export default function LanguageChange() {
  const result = useContext(LanguageProvider);
  return (
    <div>
      <span>Ngôn ngữ hiện tại : </span>
      <select
        name="language"
        id="language"
        onChange={result?.changeLanguage}
        value={result?.language}
      >
        <option value="vn">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
      <p>{result?.language === "en" ? "Welcome" : "Xin chào"}</p>
    </div>
  );
}
