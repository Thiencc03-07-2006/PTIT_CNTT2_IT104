import React, { useState } from "react";

type LanguageContextType = {
  language: "en" | "vn";
  changeLanguage(): void;
};

export const LanguageProvider = React.createContext<LanguageContextType | null>(
  null
);

type PropsType = {
  children?: React.ReactNode;
};

export default function LanguageContext({ children }: PropsType) {
  const [language, setLanguage] = useState<"en" | "vn">("vn");
  const changeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value as "vn" | "en");
  };
  return (
    <LanguageProvider.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageProvider.Provider>
  );
}
