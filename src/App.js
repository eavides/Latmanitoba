import { React, useState } from "react";
import Header from "./components/Header/Header";
import Cover from "./components/Cover/Cover";
import About from "./components/About/About";
import "./App.css";
import { useTranslation } from "react-i18next";
import Members from "./components/Members/Members";
function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("es");

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} setLang={setLang} langu={lang} />
      <Cover t={t} />
      <About t={t} />
      <Members t={t} />
    </div>
  );
}

export default App;
